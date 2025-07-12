// Project: SecureAPI-MockServer
// Description: A mock secure API service using Java Spring Boot, with HTTPS and token-based authentication

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class SecureApiMockServer {
    public static void main(String[] args) {
        SpringApplication.run(SecureApiMockServer.class, args);
    }
}

@RestController
@RequestMapping("/api")
class ApiController {

    private static final String MOCK_TOKEN = "abc123securetoken";

    @GetMapping("/echo")
    public ResponseEntity<?> echo(@RequestHeader(value = "Authorization", required = false) String authHeader,
                                   @RequestParam String message) {
        if (authHeader == null || !authHeader.equals("Bearer " + MOCK_TOKEN)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or missing token");
        }

        Map<String, String> response = new HashMap<>();
        response.put("echo", message);
        return ResponseEntity.ok(response);
    }
}

/*
README One-Liner:
SecureAPI-MockServer is a simple HTTPS-based Java Spring Boot service that demonstrates token authentication, simulating a secure echo endpoint for protocol testing.
*/
