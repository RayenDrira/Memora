// Define all categories, their subjects, and a single SVG icon for each category
const categories = {
  history: {
    title: "His<span class='blue'>to</span>ry<span class='blue'>!</span>",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' width='29' height='29' viewBox='0 0 29 29' fill='none'><path d='M14.5 29C10.7944 29 7.56578 27.7718 4.814 25.3154C2.06222 22.859 0.484407 19.7909 0.0805555 16.1111H3.38333C3.75926 18.9037 5.00143 21.213 7.10983 23.0389C9.21824 24.8648 11.6816 25.7778 14.5 25.7778C17.6417 25.7778 20.307 24.6838 22.4959 22.4959C24.6849 20.308 25.7789 17.6427 25.7778 14.5C25.7767 11.3573 24.6828 8.69248 22.4959 6.50566C20.3091 4.31885 17.6438 3.22437 14.5 3.22222C12.6472 3.22222 10.9153 3.65185 9.30417 4.51111C7.69305 5.37037 6.33704 6.55185 5.23611 8.05555H9.66667V11.2778H0V1.61111H3.22222V5.39722C4.59167 3.6787 6.26346 2.34954 8.23761 1.40972C10.2118 0.469907 12.2992 0 14.5 0C16.5139 0 18.4005 0.382907 20.1598 1.14872C21.9192 1.91454 23.4497 2.9478 24.7515 4.2485C26.0533 5.5492 27.0871 7.07976 27.8529 8.84016C28.6187 10.6006 29.0011 12.4872 29 14.5C28.9989 16.5128 28.6166 18.3994 27.8529 20.1598C27.0892 21.9202 26.0554 23.4508 24.7515 24.7515C23.4476 26.0522 21.917 27.086 20.1598 27.8529C18.4026 28.6198 16.516 29.0021 14.5 29ZM19.0111 21.2667L12.8889 15.1444V6.44444H16.1111V13.8556L21.2667 19.0111L19.0111 21.2667Z' fill='black' /> </svg>",
    subjects: [
      "World War I",
      "World War II",
      "Planes",
      "Music & History",
      "Napoleon",
      "Pyramids",
      "Medicine in History",
      "Geography & History",
      "Gandhi",
      "Tech",
      "Palestine",
      "Politics",
      "Arts",
      "Engineering",
      "Gandhi",
    ],
  },
  geography: {
    title: "Geo<span class='blue'>gra</span>phy<span class='blue'>!</span>",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'><path d='M17.5 32.0834C15.4827 32.0834 13.5868 31.7004 11.8125 30.9342C10.0382 30.1681 8.49481 29.1293 7.18231 27.8178C5.86981 26.5063 4.83099 24.9629 4.06586 23.1876C3.30072 21.4123 2.91766 19.5165 2.91669 17.5001C2.91572 15.4837 3.29877 13.5879 4.06586 11.8126C4.83294 10.0373 5.87176 8.4939 7.18231 7.18237C8.49287 5.87085 10.0363 4.83203 11.8125 4.06591C13.5888 3.2998 15.4846 2.91675 17.5 2.91675C19.5154 2.91675 21.4113 3.2998 23.1875 4.06591C24.9638 4.83203 26.5072 5.87085 27.8177 7.18237C29.1283 8.4939 30.1676 10.0373 30.9356 11.8126C31.7037 13.5879 32.0863 15.4837 32.0834 17.5001C32.0804 19.5165 31.6974 21.4123 30.9342 23.1876C30.171 24.9629 29.1322 26.5063 27.8177 27.8178C26.5033 29.1293 24.9599 30.1686 23.1875 30.9357C21.4152 31.7028 19.5193 32.0854 17.5 32.0834ZM17.5 29.1667C20.757 29.1667 23.5156 28.0365 25.7761 25.7761C28.0365 23.5157 29.1667 20.757 29.1667 17.5001C29.1667 17.3299 29.1609 17.1535 29.1492 16.9707C29.1375 16.7879 29.1312 16.6363 29.1302 16.5157C29.0087 17.2206 28.6806 17.8039 28.1459 18.2657C27.6111 18.7275 26.9792 18.9584 26.25 18.9584H23.3334C22.5313 18.9584 21.8449 18.6731 21.2742 18.1024C20.7035 17.5317 20.4177 16.8448 20.4167 16.0417V14.5834H14.5834V11.6667C14.5834 10.8647 14.8692 10.1783 15.4409 9.60758C16.0125 9.03689 16.6989 8.75105 17.5 8.75008H18.9584C18.9584 8.19105 19.1105 7.69911 19.4148 7.27425C19.7191 6.84939 20.0895 6.50279 20.5261 6.23446C20.04 6.11293 19.548 6.01571 19.0502 5.94279C18.5525 5.86987 18.0357 5.83341 17.5 5.83341C14.2431 5.83341 11.4844 6.96362 9.22398 9.22404C6.96356 11.4845 5.83336 14.2431 5.83336 17.5001H13.125C14.7292 17.5001 16.1025 18.0713 17.2448 19.2136C18.3872 20.356 18.9584 21.7292 18.9584 23.3334V24.7917H14.5834V28.8022C15.0695 28.9237 15.5497 29.0151 16.0242 29.0763C16.4986 29.1376 16.9906 29.1677 17.5 29.1667Z' fill='black'/></svg>",
    subjects: [
      "Countries",
      "Capitals",
      "Maps",
      "Climate Zones",
      "Oceans",
      "Mountain Ranges",
      "Rivers",
      "Deserts",
      "Cities",
      "Flags",
    ],
  },
  language: {
    title: "Lan<span class='blue'>gua</span>ge<span class='blue'>!</span>",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'><g clip-path='url(#clip0_403_799)'><path d='M11 16.5L10 19.6H12L11 16.5Z' fill='black'/><path d='M30.3 3H14.3V8H18.3V10H5.30005C3.60005 10 2.30005 11.3 2.30005 13V24C2.30005 25.7 3.60005 27 5.30005 27H6.30005V32.1L12.6 27H19.3V20H30.3C32 20 33.3 18.7 33.3 17V6C33.3 4.3 32 3 30.3 3ZM13.1 22.9L12.6 21.3H9.50005L8.90005 22.9H6.50005L9.80005 14H12.2L15.5 22.9H13.1ZM28.3 15V17C27 17 25.6 16.6 24.4 16C23.2 16.6 21.8 16.9 20.4 17L20.3 15C21 15 21.7 14.9 22.4 14.7C21.5 13.8 20.9 12.7 20.6 11.5H22.7001C23.0001 12.4 23.6 13.1 24.3 13.7C25.4 12.8 26.1001 11.5 26.2001 10H20.2001V8H23.2001V6H25.2001V8H28.5L28.6 9C28.7 11.1 27.9 13.2 26.4 14.7C27.1 14.9 27.7 15 28.3 15Z' fill='black'/></g><defs><clipPath id='clip0_403_799'><rect width='36' height='36' fill='white'/></clipPath></defs></svg>",
    subjects: [
      "Spanish",
      "French",
      "German",
      "Grammar Rules",
      "Vocabulary",
      "Common Phrases",
      "Verb Conjugation",
      "Idioms",
      "Pronunciation",
      "Writing Systems",
    ],
  },
  science: {
    title: "Sci<span class='blue'>en</span>ce<span class='blue'>!</span>",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><ellipse cx='10' cy='10' rx='8' ry='5' fill='yellow'/></svg>",
    subjects: [
      "Biology",
      "Chemistry",
      "Physics",
      "Astronomy",
      "Geology",
      "Botany",
      "Zoology",
      "Genetics",
      "Paleontology",
      "Quantum Physics",
    ],
  },
  mathematics: {
    title: "Math<span class='blue'>ema</span>tics<span class='blue'>!</span>",
    subjects: [
      "Algebra",
      "Calculus",
      "Geometry",
      "Trigonometry",
      "Statistics",
      "Probability",
      "Number Theory",
      "Linear Algebra",
      "Topology",
      "Differential Equations",
    ],
  },
  literature: {
    title: "Lit<span class='blue'>era</span>ture<span class='blue'>!</span>",
    subjects: [
      "Shakespeare",
      "Poetry",
      "Novels",
      "Drama",
      "Literary Devices",
      "World Classics",
      "American Literature",
      "British Literature",
    ],
  },
  technology: {
    title: "Tech<span class='blue'>no</span>logy<span class='blue'>!</span>",
    subjects: [
      "Programming",
      "Artificial Intelligence",
      "Cybersecurity",
      "Web Development",
      "Mobile Development",
      "Data Science",
      "Cloud Computing",
      "Networking",
      "Blockchain",
      "IoT (Internet of Things)",
      "Machine Learning",
    ],
  },
  art: {
    title: "Art<span class='blue'>s</span> & Design<span class='blue'>!</span>",
    subjects: [
      "Painting",
      "Sculpture",
      "Photography",
      "Graphic Design",
      "Interior Design",
      "Fashion Design",
      "Animation",
      "Film Making",
      "Architecture",
      "Digital Art",
      "Art History",
    ],
  },
};

// Function to update the category title, buttons, and icons
function updateCategory(categoryKey) {
  const selectedCategory = categories[categoryKey];

  // Update the category title
  const categoryTitleElement = document.getElementById("categorie-title");
  if (categoryTitleElement) {
    categoryTitleElement.innerHTML = selectedCategory.title;
  }

  // Update the subject buttons and their SVGs
  const subjectButtons = document.querySelectorAll(".subject-button");
  subjectButtons.forEach((button, index) => {
    if (selectedCategory.subjects[index]) {
      const subject = selectedCategory.subjects[index];

      // Clear the button's content
      button.innerHTML = "";

      // Add the new SVG
      button.innerHTML = selectedCategory.icon;

      // Add the new text
      const textNode = document.createElement("span");
      textNode.textContent = subject;
      button.appendChild(textNode);

      button.style.display = "inline-flex"; // Ensure the button is visible
    } else {
      button.style.display = "none"; // Hide unused buttons
    }
  });
}

// Handle category from URL query parameter (for redirection from index.html)
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  if (category && categories[category.toLowerCase()]) {
    updateCategory(category.toLowerCase());
  } else {
    console.error("Invalid or missing category parameter.");
  }

  // Handle category links in browse.html (dynamic updates without reload)
  const categoryLinks = document.querySelectorAll(".categories a");
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const categoryKey = this.textContent.toLowerCase();

      if (categories[categoryKey]) {
        updateCategory(categoryKey);
      } else {
        console.error("Invalid category link clicked.");
      }
    });
  });
});
