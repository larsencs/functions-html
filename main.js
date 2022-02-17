const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const renderData = (computerObject, number) =>{
    const htmlMain = document.getElementById("main")
    const dataToRender = [
        `<section id="computer--${number}">`
        , `<h1>${computerObject.manufacturer} ${computerObject.make}</h1><br>`
        , `<div>Model: ${computerObject.model}</div><br>`
        , `<div>Memory: ${computerObject.specs.memory} GB</div><br>`
        , `<div>Hard drive space: ${computerObject.specs.hardDrive} GB</div><br>`
        , `<div>Processor speed: ${computerObject.specs.processor} Ghz</div><br>`
        , "</section>"
    ]
    let renderedData = ""

    for(let i=0; i<dataToRender.length; i++){
        renderedData += dataToRender[i]
        // console.log(dataToRender[i])
    }
    
    htmlMain.innerHTML += renderedData
    // console.log(renderedData)

    
    //  main.innerHTML = `<h1>${computerObject.manufacturer} ${computerObject.make}</h1><br>`
    //  main.innerHTML += `<div>Model: ${computerObject.model}</div><br>`
    //  main.innerHTML += `<div>Memory: ${computerObject.specs.memory} GB</div><br>`
    //  main.innerHTML += `<div>Hard drive space: ${computerObject.specs.hardDrive} GB</div><br>`
    //  main.innerHTML += `<div>Processor speed: ${computerObject.processor} Ghz</div><br>`

}

renderData(computer, 1)
renderData(computer, 2)
renderData(computer, 3)