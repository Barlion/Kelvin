package com.kelvin

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KelvinApplication

fun main(args: Array<String>) {
    runApplication<KelvinApplication>(*args)
}
