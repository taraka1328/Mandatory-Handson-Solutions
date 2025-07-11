package com.example.jwtauth.controller;

import com.example.jwtauth.model.AuthResponse;
import com.example.jwtauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public AuthResponse authenticate(Principal principal) {
        String username = principal.getName();
        String token = jwtUtil.generateToken(username);
        return new AuthResponse(token);
    }
}
