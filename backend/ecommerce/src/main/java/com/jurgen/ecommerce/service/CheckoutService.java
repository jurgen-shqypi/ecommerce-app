package com.jurgen.ecommerce.service;

import com.jurgen.ecommerce.dto.Purchase;
import com.jurgen.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
