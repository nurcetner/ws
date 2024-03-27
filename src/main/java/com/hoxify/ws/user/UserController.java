package com.hoxify.ws.user;


import com.hoxify.ws.shared.GenericMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/api/v1/users")
    GenericMessage createUser(@RequestBody User user){
       userService.save(user);
        return new GenericMessage("message: User is created");
    }

    @GetMapping("api/v1/users")
    List<User> getUsers(){
   return userService.getUsers();
    }

}

