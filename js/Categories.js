  // Define all categories and their subjects
  const categories = {
    history: {
      title: "His<span class='blue'>to</span>ry<span class='blue'>!</span>",
      subjects: [
        "World War I", "World War II", "Planes",
        "Music & History", "Napoleon", "Pyramids / Ancient Egypt",
        "Medicine in History", "Geography & History", "Gandhi",
        "Tech", "Palestine", "Politics",
        "Arts", "Engineering", "Check Out",
        "Check Out", "Check Out", "Gandhi"
      ]
    },
    geography: {
      title: "Geo<span class='blue'>gra</span>phy<span class='blue'>!</span>",
      subjects: [
        "Countries", "Capitals", "Maps",
        "Climate Zones", "Oceans", "Mountain Ranges",
        "Rivers", "Deserts", "Cities",
        "Flags", "Population", "Time Zones",
        "Natural Resources", "Biomes", "Check Out",
        "Check Out", "Check Out", "Check Out"
      ]
    },
    language: {
      title: "Lan<span class='blue'>gua</span>ge<span class='blue'>!</span>",
      subjects: [
        "Spanish", "French", "German",
        "Grammar Rules", "Vocabulary", "Common Phrases",
        "Verb Conjugation", "Idioms", "Pronunciation",
        "Writing Systems", "Linguistics", "Check Out",
        "Check Out", "Check Out", "Check Out",
        "Check Out", "Check Out", "Check Out"
      ]
    },
    science: {
        title: "Sci<span class='blue'>en</span>ce<span class='blue'>!</span>",
        subjects: [
          "Biology", "Chemistry", "Physics",
          "Astronomy", "Geology", "Botany",
          "Zoology", "Genetics", "Paleontology",
          "Quantum Physics", "Electromagnetism", "Check Out",
          "Check Out", "Check Out", "Check Out",
          "Check Out", "Check Out", "Check Out"
        ],
      },
      mathematics: {
        title: "Math<span class='blue'>ema</span>tics<span class='blue'>!</span>",
        subjects: [
          "Algebra", "Calculus", "Geometry",
          "Trigonometry", "Statistics", "Probability",
          "Number Theory", "Linear Algebra", "Topology",
          "Differential Equations", "Check Out", "Check Out",
          "Check Out", "Check Out", "Check Out",
          "Check Out", "Check Out", "Check Out"
        ],
      },
      literature: {
        title: "Lit<span class='blue'>era</span>ture<span class='blue'>!</span>",
        subjects: [
          "Shakespeare", "Poetry", "Novels",
          "Drama", "Literary Devices", "World Classics",
          "American Literature", "British Literature", "Check Out",
          "Check Out", "Check Out", "Check Out",
          "Check Out", "Check Out", "Check Out",
          "Check Out", "Check Out", "Check Out"
        ],
      }
  };

  // Get all category links
  const categoryLinks = document.querySelectorAll('.categories a');
  
  // Add click event to each category link
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.textContent.toLowerCase();
      
      if (categories[category]) {
        // Update title
        document.getElementById('categorie-title').innerHTML = categories[category].title;
        
        // Update all subject buttons
        const subjectButtons = document.querySelectorAll('#subject-title');
        categories[category].subjects.forEach((subject, index) => {
          if (subjectButtons[index]) {
            // Keep the icon, only change text
            const icon = subjectButtons[index].querySelector('img').outerHTML;
            subjectButtons[index].innerHTML = icon + ' ' + subject;
          }
        });
      }
    });
  });