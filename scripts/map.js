function registrarOcorrencia(event) {
      let titulo = prompt("Qual é a ocorrência neste local? (Ex: Buraco, Acidente)");
      
      if (titulo) {
        let descricao = prompt("Digite uma descrição detalhada para essa ocorrência:");
        
        let retangulo = event.currentTarget.getBoundingClientRect();
        let xPx = event.clientX - retangulo.left;
        let yPx = event.clientY - retangulo.top;

        let xPorcento = (xPx / retangulo.width) * 100;
        let yPorcento = (yPx / retangulo.height) * 100;

        let bolinhaHTML = `
          <div 
            style="position: absolute; left: ${xPorcento}%; top: ${yPorcento}%; width: 16px; height: 16px; background: red; border-radius: 50%; transform: translate(-50%, -50%); border: 2px solid white; cursor: pointer;" 
            title="${titulo}"
            onclick="event.stopPropagation(); alert('🔴 OCORRÊNCIA:\\n' + '${titulo}' + '\\n\\n📝 DESCRIÇÃO:\\n' + '${descricao}');"
          ></div>
        `;

        event.currentTarget.insertAdjacentHTML('beforeend', bolinhaHTML);
      }
    }