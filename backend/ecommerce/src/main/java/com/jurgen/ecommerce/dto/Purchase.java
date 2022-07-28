package com.jurgen.ecommerce.dto;

import com.jurgen.ecommerce.entity.Address;
import com.jurgen.ecommerce.entity.Customer;
import com.jurgen.ecommerce.entity.Order;
import com.jurgen.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
