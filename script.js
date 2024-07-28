document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const name = document.getElementById("name").value.trim();
		const phone = document.getElementById("phno").value.trim();
		const email = document.getElementById("email").value.trim();
		const message = document.getElementById("message").value.trim();
		if (name && email && phone && message) {
			alert("Thank you for your message!");
		} else {
			alert("Please fill out all fields.");
		}
	});

document.getElementById("resumebtn").addEventListener("click", function () {
	const fileUrl = "./resume.pdf";
	const a = document.createElement("a");
	a.href = fileUrl;
	a.download = "resume.pdf";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
});

document.addEventListener("DOMContentLoaded", function () {
	const typingElement = document.querySelector(".typing");
	const text = typingElement.textContent;
	let index = 0;

	typingElement.textContent = "";

	function type() {
		if (index < text.length) {
			typingElement.textContent += text[index];
			index++;
			setTimeout(type, 100); // Adjust the speed here
		} else {
			typingElement.classList.add("complete");
		}
	}

	type();
});
