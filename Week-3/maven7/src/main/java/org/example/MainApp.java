package org.example;

import org.example.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring ApplicationContext
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get bean and test
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("Clean Code");
    }
}
