package com.example.demo.controller;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        if ("admin".equals(req.getUsername())
                && "1234".equals(req.getPassword())) {

            String token = jwtUtil.generateToken(req.getUsername());
            return ResponseEntity.ok(new AuthResponse(token));
        }

        return ResponseEntity.status(401).body("Credenciales inválidas");
    }
}
