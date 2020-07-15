package io.ohjongsung.springbootreactjs;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class HomeController {

	@GetMapping("/")
	public String index() {
		return "index.html";
	}

	@GetMapping("api/now")
	public @ResponseBody String now() {
		return "안녕하세요. 현재 서버시간은 "+new Date() +"입니다. \n";
	}
}
