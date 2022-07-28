package com.jurgen.ecommerce.controller;

import com.jurgen.ecommerce.dto.Purchase;
import com.jurgen.ecommerce.dto.PurchaseResponse;
import com.jurgen.ecommerce.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService){
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase){

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;

    }

}
