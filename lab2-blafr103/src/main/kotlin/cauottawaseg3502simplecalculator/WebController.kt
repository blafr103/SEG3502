package cauottawaseg3502simplecalculator

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

@Controller

class WebController {
    @ModelAttribute
    fun addAttributes(model: Model) {
        model.addAttribute("error", "")
        model.addAttribute("first", "")
        model.addAttribute("second", "")
    }

    @RequestMapping("/")
    fun home(): String {
        return "home"
    }

    @GetMapping(value = ["/convert"])
    fun doConvert(@RequestParam(value = "first", required = false) first: String,
                  @RequestParam(value = "second", required = false) second: String,
                  @RequestParam(value = "operation", required = false) operation: String,
                  model: Model): String {
        var firstVal: Double
        var secondVal: Double
        var result : Double
        when (operation) {


            "addition" ->
                try {
                    firstVal = first.toDouble()
                    secondVal = second.toDouble()
                    result = firstVal + secondVal

                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                    model.addAttribute("result", String.format("%.2f", result))
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "FirstNumFormatError")
                    model.addAttribute("error", "SecondNumFormatError")
                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                }


            "substraction" ->
                try {
                    firstVal = first.toDouble()
                    secondVal = second.toDouble()
                    result = firstVal - secondVal

                    model.addAttribute("result", String.format("%.2f", result))
                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "FirstNumFormatError")
                    model.addAttribute("error", "SecondNumFormatError")
                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                }



            "multiplication" ->
                try {
                    firstVal = first.toDouble()
                    secondVal = second.toDouble()
                    result = firstVal * secondVal

                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                    model.addAttribute("result", String.format("%.2f", result))
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "FirstNumFormatError")
                    model.addAttribute("error", "SecondNumFormatError")
                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                }


            "division" ->
                try {
                    firstVal = first.toDouble()
                    secondVal = second.toDouble()
                    result = firstVal / secondVal

                    model.addAttribute("result", String.format("%.2f", result))
                    model.addAttribute("second", second)
                    model.addAttribute("first", first)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "FirstNumFormatError")
                    model.addAttribute("error", "SecondNumFormatError")
                    model.addAttribute("first", first)
                    model.addAttribute("second", second)
                }

            else -> {
                model.addAttribute("error", "OperationFormatError")
                model.addAttribute("first", first)
                model.addAttribute("second", second)
            }
        }
        return "home"
    }
}
