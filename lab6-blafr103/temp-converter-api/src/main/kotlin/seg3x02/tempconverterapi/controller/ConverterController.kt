package seg3x02.tempconverterapi.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("temperature-converter")
class ConverterController {

    @GetMapping("/calculator/add/{nombre1}/{nombre2}")
    fun getAdd(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = (nombre1 + nombre2)
 
    @GetMapping("/calculator/subtract/{nombre1}/{nombre2}")
    fun getSubstract(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = (nombre1 - nombre2)

     @GetMapping("/calculator/multiply/{nombre1}/{nombre2}")
    fun getMultiply(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = (nombre1 * nombre2)

    @GetMapping("/calculator/divide/{nombre1}/{nombre2}")
    fun getDivide(@PathVariable nombre1: Double, @PathVariable nombre2: Double) = (nombre1 / nombre2)
}
