package com.sapo.edu.repository;

import com.sapo.edu.entity.Customer;
import com.sapo.edu.repository.base.BaseRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends BaseRepository<Customer, Long> {
    boolean existsByPhone(String phone);

    Optional<Customer> findByPhone(String phone);

    List<Customer> findCustomersByMotorbikesId(Long motorbikeId);
}
