package com.desafiosVagas.PicPay.repository;

import com.desafiosVagas.PicPay.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    boolean existsByGmail(String gmail);
    boolean existsByCpf(String cpf);
    User save(User user);

}
