package com.academy.academy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Homecontroller {
    @GetMapping("/")
    public String home(){
        return "home";
    }
    @RequestMapping("/newmember")
    public String newmember(){
        return "/result/newmember";
    }

    @RequestMapping("/location")
    public String location(){
        return "/menu/location";
    }

}
