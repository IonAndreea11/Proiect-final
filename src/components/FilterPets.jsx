import React, { useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Components.css";

export default function FilterPets() {
  const [category, setCategory] = useState("All");

  const categories = [
    {
      title: "Dogs",
      icon: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
    },
    {
      title: "Cats",
      icon: "https://cdn-icons-png.flaticon.com/512/220/220124.png",
    },
    {
      title: "Other animals",
      icon: "https://cdn-icons-png.flaticon.com/512/3905/3905014.png",
    },
    {
      title: "All",
      icon: "https://cdn-icons-png.flaticon.com/512/5110/5110770.png",
    },
  ];

  const pets = [
    {
      id: "buddy",
      name: "Buddy",
      category: "Dogs",
      image:
        "https://www.dogtrainercollege.us/wp-content/uploads/2021/06/Marro3.919.jpg",
    },
    {
      id: "mittens",
      name: "Mittens",
      category: "Cats",
      image:
        "https://www.dailypaws.com/thmb/mYqUKSDMBGAZJtvPwq_FAk1ILVI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-turkish-angora-cat-1200195063-2000-b76590b6c0144f829ad9ae893dcef813.jpg",
    },
    {
      id: "charlie",
      name: "Charlie",
      category: "Dogs",
      image:
        "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
    },
    {
      id: "whiskers",
      name: "Whiskers",
      category: "Cats",
      image:
        "https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg",
    },
    {
      id: "max",
      name: "Max",
      category: "Other animals",
      image:
        "https://everythingbirdsonline.com/wp-content/uploads/2024/05/Yellow-Faced-Parrot-scaled.jpg",
    },
    {
      id: "bean",
      name: "Bean",
      category: "Other animals",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mixed_netherland_dwarf_mutt.jpg/1200px-Mixed_netherland_dwarf_mutt.jpg",
    },
    {
      id: "freddie",
      name: "Freddie",
      category: "Dogs",
      image:
        "https://animax.ro/cdn/shop/articles/dog-2668442_640_414x.jpg?v=1666664388",
    },
    {
      id: "smokey",
      name: "Smokey",
      category: "Cats",
      image:
        "https://preview.redd.it/selc1u0qivz41.jpg?width=1080&crop=smart&auto=webp&s=7a4469699d9eda5e7fd514026f6b010cb2e7f1ad".trim(),
    },
    {
      id: "eivor",
      name: "Eivor",
      category: "Cats",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg",
    },
    {
      id: "oreo",
      name: "Oreo",
      category: "Other animals",
      image:
        "https://frankfurt.apollo.olxcdn.com/v1/files/88e9x369t3f22-RO/image",
    },
    {
      id: "woody",
      name: "Woody",
      category: "Dogs",
      image:
        "https://rescue-dogs.org.uk/shelter/wp-content/uploads/2023/03/328273232_503439511981008_1090324829654737972_n-800x1066.jpg",
    },
    {
      id: "spike",
      name: "Spike",
      category: "Cats",
      image:
        "https://i.redd.it/adopting-a-sick-shelter-cat-v0-pys9drevxn6d1.jpg?width=3024&format=pjpg&auto=webp&s=33fa484dcfd70eefb2bbd34e1721f09eb4246f85",
    },
  ];

  const handleFilter = (filterCategory) => {
    setCategory(filterCategory);
  };

  const filteredPets =
    category === "All" ? pets : pets.filter((pet) => pet.category === category);

  return (
    <Container className="mt-5">
      <div className="categories-container">
        {categories.map(({ title, icon }) => (
          <Button
            key={title}
            variant={title === "All" ? "secondary" : "success"}
            className="category"
            onClick={() => handleFilter(title)}
          >
            <img src={icon} alt={title} className="category-icon" />
            {title}
          </Button>
        ))}
      </div>
      <Row>
        {filteredPets.map((pet) => (
          <Col md={4} key={pet.id} className="mb-3">
            <Card className="pet-card">
              <Link to={`/animal/${pet.id}`}>
                <Card.Img
                  className="meet-them-card-image"
                  variant="top"
                  src={pet.image}
                  alt={pet.name}
                />
              </Link>
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Link to={`/animal/${pet.id}`}></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
