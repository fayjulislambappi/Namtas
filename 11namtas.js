function printNamtas() {
      document.write("<h2>Namtas for 11:</h2>");
      document.write("<pre>");
      
      for (let i = 1; i <= 10; i++) {
        let result = 11 * i;
        document.write(`11 x ${i} = ${result}\n`);
      }

      document.write("</pre>");
    }

    // Trigger the printing of Namtas
    printNamtas();
