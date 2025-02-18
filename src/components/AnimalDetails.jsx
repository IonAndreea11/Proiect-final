import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaSyringe, FaTimesCircle } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";
import {
  MdOutlineChildFriendly,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { IoPaw } from "react-icons/io5";
import "./AnimalDetails.css";

const animals = [
  {
    id: "buddy",
    name: "Buddy",
    type: "Dog",
    image:
      "https://www.dogtrainercollege.us/wp-content/uploads/2021/06/Marro3.919.jpg",
    age: "Adult",
    gender: "Male",
    size: "Medium",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A playful and intelligent puppy.",
    description:
      "Buddy is an energetic puppy, ideal for active families. He loves to run and learn new tricks.",
  },
  {
    id: "mittens",
    name: "Mittens",
    type: "Cat",
    image:
      "https://www.dailypaws.com/thmb/mYqUKSDMBGAZJtvPwq_FAk1ILVI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-turkish-angora-cat-1200195063-2000-b76590b6c0144f829ad9ae893dcef813.jpg",
    age: "Adult",
    gender: "Male",
    size: "Medium",
    vaccinated: false,
    dewormed: true,
    sterilized: false,
    goodWithAnimals: true,
    goodWithChildren: false,
    about: "An elegant and independent cat.",
    description:
      "Mittens is a curious and attentive white cat. She prefers quiet, but is affectionate with the people she is close to.",
  },
  {
    id: "charlie",
    name: "Charlie",
    type: "Dog",
    image:
      "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
    age: "Adult",
    gender: "Female",
    size: "Madium",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "The Sweetheart with a Gentle Soul.",
    description:
      "Charlie is a quiet, loving girl who's ready to find her forever family. With her soft, sweet nature and kind heart, she'll be your most loyal companion.She gets along beautifully with others, making her a wonderful addition to a home with other pets or kids. Charlie's calm demeanor and loving spirit make her the perfect match for someone looking for a best friend to share cozy moments and peaceful days.If you're searching for a gentle, affectionate pup to complete your family, Ingrid is waiting just for you.",
  },
  {
    id: "whiskers",
    name: "Whiskers",
    type: "Cat",
    image:
      "https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg",
    age: "Young",
    gender: "Male",
    size: "Medium",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    goodWithAnimals: false,
    goodWithChildren: true,
    about: "A playful and curious cat.",
    description:
      "Whiskers is a very active and curious orange cat. He loves to explore and be the center of attention.",
  },
  {
    id: "max",
    name: "Max",
    type: "Parrot",
    image:
      "https://everythingbirdsonline.com/wp-content/uploads/2024/05/Yellow-Faced-Parrot-scaled.jpg",
    age: "Young",
    gender: "Male",
    size: "Small",
    vaccinated: false,
    dewormed: false,
    sterilized: false,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A vocal and intelligent parrot.",
    description:
      "Max is a parrot who loves to imitate sounds and interact with people.",
  },
  {
    id: "bean",
    name: "Bean",
    type: "Rabbit",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mixed_netherland_dwarf_mutt.jpg/1200px-Mixed_netherland_dwarf_mutt.jpg",
    age: "Young",
    gender: "Female",
    size: "Small",
    vaccinated: true,
    dewormed: true,
    sterilized: false,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A gentle and friendly bunny.",
    description:
      "Bean is an affectionate rabbit who loves to be petted and play in open spaces.",
  },
  {
    id: "freddie",
    name: "Freddie",
    type: "Dog",
    image:
      "https://animax.ro/cdn/shop/articles/dog-2668442_640_414x.jpg?v=1666664388",
    age: "Young",
    gender: "Male",
    size: "Small",
    vaccinated: false,
    dewormed: true,
    sterilized: true,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A lively and affectionate little dog.",
    description:
      "Freddie is a playful pup who loves being around people. He gets along well with other animals and adores children. He enjoys running in the park and playing with his favorite toys.",
  },
  {
    id: "smokey",
    name: "Smokey",
    type: "Cat",
    image:
      "https://preview.redd.it/selc1u0qivz41.jpg?width=1080&crop=smart&auto=webp&s=7a4469699d9eda5e7fd514026f6b010cb2e7f1ad",
    age: "Young",
    gender: "Male",
    size: "Small",
    vaccinated: true,
    dewormed: false,
    sterilized: true,
    goodWithAnimals: false,
    goodWithChildren: true,
    about: "A curious and independent cat.",
    description:
      "Smokey is a smart and alert cat who is always on the lookout for new places to explore. While he is not very friendly with other animals, he is very affectionate with children and loves being pampered.",
  },
  {
    id: "eivor",
    name: "Eivor",
    type: "Cat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg",
    age: "Adult",
    gender: "Female",
    size: "Medium",
    vaccinated: true,
    dewormed: true,
    sterilized: false,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A graceful and gentle cat.",
    description:
      "Eivor is a calm and balanced cat. She gets along well with other animals and is very affectionate with people. She enjoys sitting by the window and watching the outside world.",
  },
  {
    id: "oreo",
    name: "Oreo",
    type: "Guinea pig",
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/88e9x369t3f22-RO/image",
    age: "Young",
    gender: "Male",
    size: "Small",
    vaccinated: true,
    dewormed: true,
    sterilized: false,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A curious and playful guinea pig.",
    description:
      "Oreo is a friendly and active guinea pig who loves to explore and nibble on hay. He is gentle and enjoys being held and petted.",
  },
  {
    id: "woody",
    name: "Woody",
    type: "Dog",
    image:
      "https://rescue-dogs.org.uk/shelter/wp-content/uploads/2023/03/328273232_503439511981008_1090324829654737972_n-800x1066.jpg",
    age: "Adult",
    gender: "Male",
    size: "Medium",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    goodWithAnimals: true,
    goodWithChildren: true,
    about: "A loyal and intelligent dog.",
    description:
      "Woody is an affectionate and well-trained dog. He loves being active, running around, and learning new tricks. He gets along well with other animals and is an excellent companion for children.",
  },
  {
    id: "spike",
    name: "Spike",
    type: "Cat",
    image:
      "https://i.redd.it/adopting-a-sick-shelter-cat-v0-pys9drevxn6d1.jpg?width=3024&format=pjpg&auto=webp&s=33fa484dcfd70eefb2bbd34e1721f09eb4246f85",
    age: "Adult",
    gender: "Male",
    size: "Medium",
    vaccinated: false,
    dewormed: true,
    sterilized: true,
    goodWithAnimals: false,
    goodWithChildren: false,
    about: "An independent and cautious cat.",
    description:
      "Spike is a cat who prefers to have his own space. While he is not very social, he is loyal to his owners. He enjoys peace and quiet, often seeking hidden spots where he can rest undisturbed.",
  },
];

export default function AnimalDetails() {
  const { id } = useParams();
  const animal = animals.find((animal) => animal.id === id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasOtherPets, setHasOtherPets] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [petDetails, setPetDetails] = useState("");

  if (!animal) {
    return <h2>Animal not found</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      dob,
      email,
      phone,
      hasOtherPets,
      petDetails: hasOtherPets ? petDetails : "No other pets",
    };
    console.log("Form Data:", formData);
    setIsFormOpen(false);
  };

  return (
    <div className="main-card">
      <div className="details-container">
        <div className="left-column">
          <div className="image-container">
            <img src={animal.image} alt={animal.name} />
          </div>
          <h1 className="animal-name">{animal.name}</h1>
          <p className="animal-gender">{animal.gender}</p>
          <button className="adopt-button" onClick={() => setIsFormOpen(true)}>
            Adopt Me <IoPaw className="paw-icon" />
          </button>
        </div>

        <div className="right-column">
          <div className="card-with-animal">
            <h3>Basic Info</h3>
            <div className="card-item">
              <span className="card-label">Age:</span>
              <span className="card-value">{animal.age}</span>
            </div>
            <div className="card-item">
              <span className="card-label">Size:</span>
              <span className="card-value">{animal.size}</span>
            </div>
          </div>

          <div className="card-with-animal">
            <h3>Status</h3>
            <div className="card-item">
              <span className="card-label">Vaccinated:</span>
              <span className="card-value">
                {animal.vaccinated ? (
                  <>
                    <FaSyringe className="icon available" />
                    <span> Yes</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="icon stop" />
                    <span> No</span>
                  </>
                )}
              </span>
            </div>
            <div className="card-item">
              <span className="card-label">Dewormed:</span>
              <span className="card-value">
                {animal.dewormed ? (
                  <>
                    <MdOutlineHealthAndSafety className="icon available" />
                    <span> Yes</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="icon stop" />
                    <span> No</span>
                  </>
                )}
              </span>
            </div>
            <div className="card-item">
              <span className="card-label">Sterilized:</span>
              <span className="card-value">
                {animal.sterilized ? (
                  <>
                    <MdOutlineHealthAndSafety className="icon available" />
                    <span> Yes</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="icon stop" />
                    <span> No</span>
                  </>
                )}
              </span>
            </div>
            <div className="card-item">
              <span className="card-label">Good with Animals:</span>
              <span className="card-value">
                {animal.goodWithAnimals ? (
                  <>
                    <PiDogBold className="icon available" />
                    <span> Yes</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="icon stop" />
                    <span> No</span>
                  </>
                )}
              </span>
            </div>
            <div className="card-item">
              <span className="card-label">Good with Children:</span>
              <span className="card-value">
                {animal.goodWithChildren ? (
                  <>
                    <MdOutlineChildFriendly className="icon available" />
                    <span> Yes</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="icon stop" />
                    <span> No</span>
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="card-with-animal ">
            <h3>About & Description</h3>
            <p className="about-text">
              <strong>About:</strong> {animal.about}
            </p>
            <p className="description-text">
              <strong>Description:</strong> {animal.description}
            </p>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Adoption Form</h2>
            <form className="space-16" onSubmit={handleSubmit}>
              <div>
                <label className="adoption-form-elements">First Name</label>
                <input
                  type="text"
                  className="adoption-input"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label className="adoption-form-elements">Last Name</label>
                <input
                  type="text"
                  className="adoption-input"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <label className="adoption-form-elements">Date of Birth</label>
                <input
                  type="date"
                  className="adoption-input"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div>
                <label className="adoption-form-elements">Email Address</label>
                <input
                  type="email"
                  className="adoption-input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="adoption-form-elements">Phone Number</label>
                <input
                  type="tel"
                  className="adoption-input"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="checkbox"
                  id="hasPets"
                  checked={hasOtherPets}
                  onChange={() => setHasOtherPets(!hasOtherPets)}
                  className="mr-2"
                />
                <label htmlFor="hasPets" className="ml-2">
                  Do you have other pets?
                </label>
              </div>

              {hasOtherPets && (
                <div>
                  <label className="adoption-form-elements">
                    What pet do you have and for how long?
                  </label>
                  <textarea
                    className="adoption-input"
                    rows="3"
                    value={petDetails}
                    onChange={(e) => setPetDetails(e.target.value)}
                  ></textarea>
                </div>
              )}

              <div className="buttons-form">
                <button
                  type="button"
                  className="adopt-button"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="adopt-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
