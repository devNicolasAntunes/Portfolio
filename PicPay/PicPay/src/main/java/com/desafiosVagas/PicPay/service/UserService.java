package com.desafiosVagas.PicPay.service;

import com.desafiosVagas.PicPay.exceptions.BusinessException;
import com.desafiosVagas.PicPay.model.User;
import com.desafiosVagas.PicPay.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user) {

        if (userRepository.existsByGmail(user.getGmail())) {
            throw new BusinessException("Email já cadastrado");
        }

        if (userRepository.existsByCpf(user.getCpf())) {
            throw new BusinessException("CPF já cadastrado");
        }

        return userRepository.save(user);
    }

    public User findById(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado"));
    }

    public void delete(UUID id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("Usuário não encontrado");
        }
        userRepository.deleteById(id);
    }

    public User update(UUID id, User user) {

        User existing = findById(id);

        if (user.getGmail() != null &&
                !user.getGmail().equals(existing.getGmail()) &&
                userRepository.existsByGmail(user.getGmail())) {
            throw new BusinessException("Email já cadastrado");
        }

        if (user.getCpf() != null &&
                !user.getCpf().equals(existing.getCpf()) &&
                userRepository.existsByCpf(user.getCpf())) {
            throw new BusinessException("CPF já cadastrado");
        }

        if (user.getName() != null) existing.setName(user.getName());
        if (user.getGmail() != null) existing.setGmail(user.getGmail());
        if (user.getCpf() != null) existing.setCpf(user.getCpf());
        if (user.getPassword() != null) existing.setPassword(user.getPassword());

        return userRepository.save(existing);
    }
}