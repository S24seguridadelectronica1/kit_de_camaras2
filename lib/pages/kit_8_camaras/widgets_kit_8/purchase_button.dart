import 'package:flutter/material.dart';
import 'package:logger/logger.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

var logger = Logger();

const String purchaseInfoPart1 =
    'Por favor, complete los datos del formulario para que podamos hacer llegar el pedido a su domicilio. '
    'El pago es contra entrega ("páguelo cuando lo tenga en sus manos") por un valor total de \$600,000, sin costo de domicilio. '
    'La entrega es inmediata una vez confirme su compra, siempre y cuando haya existencias disponibles. '
    'El pedido se entrega en un máximo de 2 horas, únicamente para Bucaramanga y su área metropolitana. '
    'Realizamos una llamada de confirmación para verificar la dirección y la disponibilidad de equipos. '
    'Recibimos pagos en efectivo, Nequi o Bancolombia.';

const String purchaseInfoPart2 =
    'Los pedidos se entregan en los siguientes horarios:\n\n'
    'De lunes a viernes: de 8:00 a.m. a 6:00 p.m. (jornada continua).\n'
    'Sábados: de 8:00 a.m. a 1:00 p.m.\n'
    'Domingos y festivos no hacemos entregas.\n\n'
    'Por favor, confirme su compra para garantizar la entrega inmediata.';

class PurchaseButton extends StatefulWidget {
  final String buttonText;
  const PurchaseButton({super.key, this.buttonText = 'Comprar'});

  @override
  PurchaseButtonState createState() => PurchaseButtonState();
}

class PurchaseButtonState extends State<PurchaseButton> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _addressController = TextEditingController();
  final TextEditingController _neighborhoodController = TextEditingController();
  final TextEditingController _cityController = TextEditingController();

  void _showPurchaseModal() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return Dialog(
          insetPadding:
              const EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Image.asset(
                            'assets/images/1.webp',
                            width: 30,
                            height: 30,
                            fit: BoxFit.contain,
                          ),
                          const SizedBox(width: 10),
                          const Text(
                            'Formulario De Compra',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                      IconButton(
                        icon: const Icon(Icons.close),
                        onPressed: () => Navigator.of(context).pop(),
                      ),
                    ],
                  ),
                  const SizedBox(height: 5),
                  const Text(
                    purchaseInfoPart1,
                    style: TextStyle(fontSize: 14, color: Colors.grey),
                  ),
                  const SizedBox(height: 16),
                  _buildTextField('Nombre', _nameController),
                  const SizedBox(height: 10),
                  _buildTextField('Teléfono', _phoneController,
                      keyboardType: TextInputType.phone),
                  const SizedBox(height: 10),
                  _buildTextField('Dirección', _addressController),
                  const SizedBox(height: 10),
                  _buildTextField('Barrio', _neighborhoodController),
                  const SizedBox(height: 10),
                  _buildTextField('Ciudad', _cityController),
                  const SizedBox(height: 16),
                  // Reemplaza la sección del LayoutBuilder con este código:
                  LayoutBuilder(
                    builder: (context, constraints) {
                      double screenWidth = MediaQuery.of(context).size.width;

                      // Adjust button sizes based on screen width
                      double buttonWidth = screenWidth > 600 ? 120 : 100;
                      double buttonTextSize = screenWidth > 600 ? 14 : 12;

                      return Column(
                        children: [
                          Align(
                            // Cambiar alineación basada en el ancho de la pantalla
                            alignment: screenWidth > 600
                                ? Alignment.centerRight
                                : Alignment.center,
                            child: Wrap(
                              spacing: 8, // Horizontal space between buttons
                              runSpacing: 8, // Vertical space between rows
                              // Cambiar alineación del Wrap basada en el ancho de la pantalla
                              alignment: screenWidth > 600
                                  ? WrapAlignment.end
                                  : WrapAlignment.center,
                              children: [
                                SizedBox(
                                  width: buttonWidth,
                                  height: 36,
                                  child:
                                      LlamadaButton(textSize: buttonTextSize),
                                ),
                                SizedBox(
                                  width: buttonWidth,
                                  height: 36,
                                  child: _buildWhatsAppButton(buttonTextSize),
                                ),
                                SizedBox(
                                  width: buttonWidth,
                                  height: 36,
                                  child: ElevatedButton(
                                    onPressed: _onConfirmPurchase,
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor: const Color.fromRGBO(
                                          147, 192, 228, 1),
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 8),
                                    ),
                                    child: FittedBox(
                                      fit: BoxFit.scaleDown,
                                      child: Text(
                                        'Confirmar',
                                        style:
                                            TextStyle(fontSize: buttonTextSize),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      );
                    },
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    purchaseInfoPart2,
                    style: TextStyle(fontSize: 14, color: Colors.grey),
                  ),
                  const SizedBox(height: 16),
                  TextButton(
                    onPressed: () => Navigator.of(context).pop(),
                    child: const Text('Cerrar'),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildTextField(String label, TextEditingController controller,
      {TextInputType keyboardType = TextInputType.text}) {
    return TextField(
      controller: controller,
      keyboardType: keyboardType,
      decoration: InputDecoration(
        labelText: label,
        border: OutlineInputBorder(),
      ),
    );
  }

  void _onConfirmPurchase() async {
    logger.i("Compra confirmada con los siguientes datos:");
    logger.i("Nombre: ${_nameController.text}");
    logger.i("Teléfono: ${_phoneController.text}");
    logger.i("Dirección: ${_addressController.text}");
    logger.i("Barrio: ${_neighborhoodController.text}");
    logger.i("Ciudad: ${_cityController.text}");

    final response = await Supabase.instance.client.from('kits').insert({
      'nombre': _nameController.text,
      'telefono': _phoneController.text,
      'direccion': _addressController.text,
      'barrio': _neighborhoodController.text,
      'ciudad': _cityController.text,
    }).execute();

    if (response.error == null) {
      logger.i("Datos insertados correctamente en Supabase");
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
              content: Text('¡Compra confirmada y datos guardados!')),
        );
      }
    } else {
      logger
          .e("Error al insertar datos en Supabase: ${response.error!.message}");
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
              content: Text(
                  'Error al guardar los datos: ${response.error!.message}')),
        );
      }
    }

    if (mounted) {
      Navigator.of(context).pop();
    }
  }

  void _launchWhatsApp() async {
    final String phone = '3046615865';
    final String message = 'Hola, estoy interesado en el kit de 4 cámaras.';
    final Uri whatsappUri =
        Uri.parse('https://wa.me/$phone?text=${Uri.encodeComponent(message)}');

    if (await canLaunchUrl(whatsappUri)) {
      await launchUrl(whatsappUri, mode: LaunchMode.externalApplication);
    } else {
      throw 'No se pudo abrir WhatsApp.';
    }
  }

  Widget _buildWhatsAppButton(double buttonTextSize) {
    return ElevatedButton(
      onPressed: _launchWhatsApp,
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 8),
      ),
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Text(
          'WhatsApp',
          style: TextStyle(fontSize: buttonTextSize),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _showPurchaseModal,
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
        minimumSize: const Size(double.infinity, 60),
      ),
      child: Text(widget.buttonText, style: const TextStyle(fontSize: 20)),
    );
  }
}

class LlamadaButton extends StatelessWidget {
  final double textSize;

  const LlamadaButton({
    super.key,
    this.textSize = 14,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () async {
        final Uri phoneUri = Uri.parse('tel:+573046615865');
        if (await canLaunchUrl(phoneUri)) {
          await launchUrl(phoneUri);
        } else {
          throw 'No se pudo realizar la llamada.';
        }
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.green,
        padding: const EdgeInsets.symmetric(horizontal: 8),
      ),
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Text(
          'Llamar',
          style: TextStyle(fontSize: textSize),
        ),
      ),
    );
  }
}
