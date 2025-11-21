let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// PORTFOLIO SCREW EVENTS // 

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2 
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});



// MY CONTACT FORM // 

const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "a1ccab64-f758-438b-bc68-8f9d7c746525"); // your Web3Forms key

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + (data.message || "Something went wrong"));
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// const form = document.getElementById('form');
// const submitBtn = form.querySelector('button[type="submit"]');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     formData.append("access_key", "a1ccab64-f758-438b-bc68-8f9d7c746525");

//     const originalText = submitBtn.textContent;

//     submitBtn.textContent = "Sending...";
//     submitBtn.disabled = true;

//     try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert("Success! Your message has been sent.");
//             form.reset();
//         } else {
//             alert("Error: " + data.message);
//         }

//     } catch (error) {
//         alert("Something went wrong. Please try again.");
//     } finally {
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
//     }
// });

/// CODE FOR SKILLS SCROLL DISPLAY 

// document.addEventListener('DOMContentLoaded', () => {
//     const skillCards = document.querySelectorAll('.skill-card');
  
//     function showCardsOnScroll() {
//       skillCards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         // When card is 100px before entering viewport
//         if (rect.top < window.innerHeight - 100) {
//           card.classList.add('show');
//         }
//       });
//     }
  
//     // Run once on scroll and when user scrolls
//     window.addEventListener('scroll', showCardsOnScroll);
//   });

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');  
  navbar.classList.toggle('active');  
};


window.addEventListener('load', () => {
  const paragraph = document.querySelector('.hero-content p');
  setTimeout(() => {
    paragraph.classList.add('show');  // triggers the fade-in animation
  }, 200);  // optional delay for smooth effect
});

// document.addEventListener("DOMContentLoaded", () => {
    
//     // All "Project Info" links
//     const projectLinks = document.querySelector('.project.html');

//     const modal = document.getElementById("project-modal");
//     const modalBody = document.getElementById("modal-body");
//     const closeBtn = document.querySelector(".modal-close");

//     projectLinks.forEach(link => {
//         link.addEventListener("click", async (event) => {
//             event.preventDefault();

//             const url = event.target.getAttribute("href");

//             // Fetch project HTML
//             const response = await fetch(url);
//             const html = await response.text();

//             // Extract ONLY main content between <section> tags
//             const div = document.createElement("div");
//             div.innerHTML = html;

//             const hero = div.querySelector(".hero");
//             const details = div.querySelector(".project-details");
//             const gallery = div.querySelector(".gallery");
//             const git = div.querySelector(".git");

//             modalBody.innerHTML = "";
//             modalBody.appendChild(hero.cloneNode(true));
//             modalBody.appendChild(details.cloneNode(true));
//             modalBody.appendChild(gallery.cloneNode(true));
//             modalBody.appendChild(git.cloneNode(true));

//             // Show modal
//             modal.style.display = "flex";
//             document.body.style.overflow = "hidden";
//         });
//     });

//     // Close modal
//     closeBtn.addEventListener("click", () => {
//         modal.style.display = "none";
//         document.body.style.overflow = "auto";
//     });

//     // Click outside to close
//     modal.addEventListener("click", (e) => {
//         if (e.target === modal) {
//             modal.style.display = "none";
//             document.body.style.overflow = "auto";
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("project-modal");
//   const modalBody = document.getElementById("modal-body");
//   const closeBtn = document.querySelector(".modal-close");

//   // Grab all project links by ID
//   const projectLinks = ["project.html", "project2.html", "project3.html"];

//   projectLinks.forEach(id => {
//     const link = document.getElementById(id);
//     link.addEventListener("click", async (e) => {
//       e.preventDefault();

//       // Fetch HTML of the project page
//       const response = await fetch(link.href);
//       const htmlText = await response.text();

//       // Parse HTML and extract relevant sections
//       const tempDiv = document.createElement("div");
//       tempDiv.innerHTML = htmlText;
//       const content = tempDiv.querySelector(".hero, .project-details, .gallery, .git");

//       // Insert content into modal
//       modalBody.innerHTML = "";
//       if (content) modalBody.appendChild(content.cloneNode(true));

//       modal.style.display = "flex";
//     });
//   });

//   // Close modal
//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//   });

//   // Close modal if clicking outside content
//   modal.addEventListener("click", (e) => {
//     if (e.target === modal) modal.style.display = "none";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".modal-close");

  const links = [
    document.getElementById("project1-link"),
    document.getElementById("project2-link"),
    document.getElementById("project3-link")
  ];

  links.forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      const res = await fetch(link.getAttribute("href"));
      const html = await res.text();
      const div = document.createElement("div");
      div.innerHTML = html;

      modalBody.innerHTML = "";
      const content = div.querySelector(".hero, .project-details, .gallery, .git");
      if(content) modalBody.appendChild(content.cloneNode(true));

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});



  