package com.kelvin.service

import com.kelvin.entity.User
import com.kelvin.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(@Autowired val userRepository: UserRepository) {

    fun saveUser(user: User): User {
        // Hash the password before saving
        return userRepository.save(user)
    }

    fun findUserByEmail(email: String): Optional<User> {
        return userRepository.findByEmail(email)
    }
}
