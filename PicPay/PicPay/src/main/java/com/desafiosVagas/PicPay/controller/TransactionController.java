package com.desafiosVagas.PicPay.controller;

import com.desafiosVagas.PicPay.controllerDTO.TransferRequestDTO;
import com.desafiosVagas.PicPay.service.TransferService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransferService transferService;

    public TransactionController(TransferService transferService) {
        this.transferService = transferService;
    }

    @PostMapping("/transfer")
    public ResponseEntity<Void> transfer(@Valid @RequestBody TransferRequestDTO request) {

        transferService.transfer(
                request.getSenderId(),
                request.getReceiverId(),
                request.getAmount()
        );

        return ResponseEntity.noContent().build();
    }
}
