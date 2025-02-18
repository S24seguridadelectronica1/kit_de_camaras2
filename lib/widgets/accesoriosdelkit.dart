import 'package:flutter/material.dart';

class AccesoriosDelKit extends StatelessWidget {
  const AccesoriosDelKit({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    return Container(
      width: screenWidth *
          1.5, // Aumentar el ancho al 110% del ancho de la pantalla
      padding: EdgeInsets.all(screenWidth * 0.04), // Ajuste dinámico de padding
      margin:
          EdgeInsets.zero, // Eliminar cualquier margen para ajustarse al borde
      decoration: BoxDecoration(
        color: const Color.fromRGBO(255, 119, 119, 0.89),
        borderRadius: BorderRadius.circular(4.0),
      ),
      child: Text(
        'Accesorios del kit.',
        style: TextStyle(
          fontSize: screenWidth *
              0.05, // Tamaño de fuente dinámico basado en el ancho
          color: Colors.white,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}
