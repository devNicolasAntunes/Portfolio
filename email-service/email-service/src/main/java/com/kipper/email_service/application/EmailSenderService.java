package com.kipper.email_service.application;

import com.kipper.email_service.adapters.EmailSenderGateway;
import com.kipper.email_service.core.EmailSanderUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService implements EmailSanderUseCase {

    private final EmailSenderGateway emailSenderGateway;

    @Autowired
    public EmailSenderService(EmailSenderGateway emailGateway){
        this.emailSenderGateway = emailGateway;
    }

    @Override
    public void sendEmail(String to, String subject, String body){
        this.emailSenderGateway.sendEmail(to, subject, body);
    }

}
