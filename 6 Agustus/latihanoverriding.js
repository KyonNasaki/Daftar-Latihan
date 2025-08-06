class Message {
    constructor(text) {
        this.text = text;
    }

    show() {
        console.log(this.text);
    }
}
class Email extends Message {
    constructor(text, sender) {
        super(text);
        this.sender = sender;
    }

    show() {
        console.log(`Email dari ${this.sender}: ${this.text}`);
    }
}

class OverridingEmail extends Email {
    constructor(text, sender, subject) {
        super(text, sender);
        this.subject = subject;
    }

    show() {
        console.log(`Email dari ${this.sender} dengan subjek "${this.subject}": ${this.text}`);
    }
}

const message = new Message("Hello, world!");
const email = new Email("Hello, world!", "John Doe");
const overridingEmail = new OverridingEmail("Hello, world!", "John Doe", "Hello");

message.show();
email.show();
overridingEmail.show();