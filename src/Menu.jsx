import React from 'react'

function Menu({category, difficulty}) {
    const categories = [
        { id: 'any', name: 'Any Category' },
        { id: '9', name: 'General Knowledge' },
        { id: '10', name: 'Entertainment: Books' },
        { id: '11', name: 'Entertainment: Film' },
        { id: '12', name: 'Entertainment: Music' },
        { id: '13', name: 'Entertainment: Musicals & Theatres' },
        { id: '14', name: 'Entertainment: Television' },
        { id: '15', name: 'Entertainment: Video Games' },
        { id: '16', name: 'Entertainment: Board Games' },
        { id: '17', name: 'Science & Nature' },
        { id: '18', name: 'Science: Computers' },
        { id: '19', name: 'Science: Mathematics' },
        { id: '20', name: 'Mythology' },
        { id: '21', name: 'Sports' },
        { id: '22', name: 'Geography' },
        { id: '23', name: 'History' },
        { id: '24', name: 'Politics' },
        { id: '25', name: 'Art' },
        { id: '26', name: 'Celebrities' },
        { id: '27', name: 'Animals' },
        { id: '28', name: 'Vehicles' },
        { id: '29', name: 'Entertainment: Comics' },
        { id: '30', name: 'Science: Gadgets' },
        { id: '31', name: 'Entertainment: Japanese Anime & Manga' },
        { id: '32', name: 'Entertainment: Cartoon & Animations' }
      ];

    const selectedId = category;

// Find the category with the matching ID
const selectedCategory = categories.find(category => category.id === selectedId);
  return (
<ul className="menu bg-neutral text-neutral-content rounded-box mt-6 ml-4 mr-4 sm:mr-0">
  <li>
    <h2 className="menu-title text-neutral-content">Quiz Details</h2>
    <ul>
      <li><a>No. of question: 10</a></li>
      <li><a>Topic: {selectedCategory.name}</a></li>
      <li><a>Difficulty: {difficulty}</a></li>
    </ul>
  </li>
</ul>
  )
}

export default Menu