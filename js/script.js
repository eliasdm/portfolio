const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active'); 
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');

}


// Function to animate typing effect  on Elias 
function typeWriterEffect() {
    var text = "Elias"; // The text to be animated
    var span = document.getElementById("typedText");
    var i = 0;

    // Function to add each letter
    function typeWriter() {
        if (i < text.length) {
            span.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust the speed here
        } else {
            setTimeout(deleteLetters, 1000); // Delay before deleting letters
        }
    }

    // Function to delete each letter
    function deleteLetters() {
        if (i >= 0) {
            var newText = text.substring(0, i);
            span.textContent = newText;
            i--;
            setTimeout(deleteLetters, 100); // Adjust the speed here
        } else {
            setTimeout(typeWriter, 1000); // Delay before typing letters again
        }
    }

    // Start the animation
    typeWriter(); 
}


// Call the function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    typeWriterEffect();
});

 
//Downlaod demo Resume fiel 

document.getElementById("downloadButton").addEventListener("click", function() {
    var readmeContent = "if you are intersted to check my Resume go and check my GitLab profile. :)";
    var readmeBlob = new Blob([readmeContent], { type: 'text/plain' });

    // Create a temporary anchor element 
    var downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(readmeBlob);
    downloadLink.download = 'README.md';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});

//conatct me form function

document.addEventListener("DOMContentLoaded", function() {
    // Function to validate email
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to send email
    function sendEmail(name, email, message) {
        var subject = "New message from " + name;
        var body = "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + "Message: " + message;
        var mailtoLink = "mailto:elias.dm257@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailtoLink;
    }

    // Event listener for Send Message button
    document.getElementById("sendMessage").addEventListener("click", function() {
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        // Validate inputs
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Send email
        sendEmail(name, email, message);
    });
});



// my skills
document.addEventListener("DOMContentLoaded", function() {
    var skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(function(skillBar) {
        var width = skillBar.dataset.width;
        skillBar.style.setProperty("--width", width);
        skillBar.style.animation = "fillSkill 1s forwards";
    });
});

