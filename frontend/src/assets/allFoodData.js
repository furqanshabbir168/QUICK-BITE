// BURGERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRS
import chickenburger from '../assets/chicken-burger.avif'
import beefburger from '../assets/beef-bu.jpg'
import zingerburger from '../assets/zinger-burger.jpg'
import grilledburger from '../assets/grilled-burger.webp'
import cheeseburger from '../assets/cheese-burger.jpg'
import mashroomburger from '../assets/mushroom-burger.jpg'
import fishburger from '../assets/fish-burger.jpg'
import veggieburger from '../assets/veggie-burger-2.jpg'

// CHICKEN WINGSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
import chickenwings from '../assets/chicken-wings.jpg'
import beefwings from '../assets/buffalo-wings.avif'
import bbqwings from '../assets/bbq-wings.jpeg'
import garlicwings from '../assets/garlic-wings.jpg'
import teriyakiwings from '../assets/teriyaki-wings.jpg'
import pepperwings from '../assets/pepper-wings.jpg'
import periwings from '../assets/peri-wings.jpg'
import smokywings from '../assets/smoky-wings.jpg'

// SHAWARMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
import chickenshawarma from '../assets/chicken-shawarma.jpg'
import spicyshawarma from '../assets/spicy-shawarma.jpg'
import cheeseshawarma from '../assets/cheese-shawarma.avif'
import bbqshawarma from '../assets/bbq-shawarma.jpg'
import garlicshawarma from '../assets/garlic-shawarma.jpeg'
import perishawarma from '../assets/peri-shawarma.webp'
import tandoorishawarma from '../assets/tandori-shawarma.jpg'
import Mediterraneanshawarma from '../assets/mediterranean-shawarma.jpeg'

// FRENCH FRIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIES
import classicfries from '../assets/classic-fries.webp'
import cheesefries from '../assets/cheese-fries.webp'
import spicyfries from '../assets/spicy-fries.jpg'
import curlyfries from '../assets/curly-fries.jpg'
import garlicfries from '../assets/garlic-fries.jpg'
import loadedfries from '../assets/loaded-fries.jpg'
import perifries from '../assets/peri-fries.jpg'
import trufflefries from '../assets/truffle-fries.jpg'

// SANDWICCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCH
import chickensandwich from '../assets/chicken-sandwich.jpg'
import spicysandwich from '../assets/spicy-sandwich.jpg'
import bbqsandwich from '../assets/bbq-sandwich.jpg'
import clubsandwich from '../assets/club-sandwich.webp'
import cheesesandwich from '../assets/chesse-sandwich.webp'
import perisandwich from '../assets/peri-sandwich.webp'
import veggiesandwich from '../assets/veggie-sandwich.webp'
import tandoorisandwich from '../assets/tandoori-sandwich.jpg'

// PIZZZZZZZZZZZZZZZZZZZAAAAAAAAAAAAAAAAAAAAAAAAA
import margheritapizza from '../assets/margherita-pizza.webp'
import feastpizza from '../assets/feast-pizza.jpg'
import bbqpizza from '../assets/bbq-pizza.jpg'
import veggiepizza from '../assets/veggie-pizza.jpg'
import peripizza from '../assets/peri-pizza.webp'
import meatloverpizza from '../assets/meatlover-pizza.jpg'
import cheesepizza from '../assets/cheese-pizza.jpg'
import tandooripizza from '../assets/tandoori-pizza.jpg'

// ICE CREAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
import vanillaice from '../assets/vanilla-ice.jpg'
import chocolateice from '../assets/chocolate-ice.webp'
import strawberryice from '../assets/strawbery-ice.jpg'
import cookieice from '../assets/cookies-ice.jpg'
import mintice from '../assets/mint-ice.webp'
import caramelice from '../assets/caramel-ice.jpg'
import almondice from '../assets/almond-ice.jpg'
import mangoice from '../assets/mango-ice.webp'

// COLD DRINKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
import coke from '../assets/coke.jpg'
import pepsi from '../assets/pepsi.jpg'
import sprite from '../assets/sprite.jpg'
import fanta from '../assets/fanta.jpg'
import sevenup from '../assets/7up.jpg'
import dew from '../assets/dew.jpg'
import drpepper from '../assets/dr-pepper.jpg'
import mirinda from '../assets/mirinda.webp'





const allFoodData = [
    {
        id: 1,
        name: "Classic Chicken Burger",
        category: "Burger",
        priceUSD: 4.99,
        pricePKR: 1400,
        description: "A juicy chicken fillet with fresh lettuce, tomato, and mayo, served on a soft toasted bun.",
        image : chickenburger,
        quantity : 0
      },
      {
        id: 2,
        name: "Beef Supreme Burger",
        category: "Burger",
        priceUSD: 5.99,
        pricePKR: 1700,
        description: "Juicy beef patty topped with cheddar cheese, lettuce, and house sauce.",
        image : beefburger,
        quantity : 0
      },
      {
        id: 3,
        name: "Spicy Zinger Burger",
        category: "Burger",
        priceUSD: 5.49,
        pricePKR: 1600,
        description: "Crispy, spicy chicken fillet with special spicy mayo and lettuce.",
        image : zingerburger
      },
      {
        id: 4,
        name: "BBQ Grilled Burger",
        category: "Burger",
        priceUSD: 6.49,
        pricePKR: 1850,
        description: "Grilled chicken patty with BBQ sauce, caramelized onions, and cheddar.",
        image : grilledburger
      },
      {
        id: 5,
        name: "Cheese Explosion Burger",
        category: "Burger",
        priceUSD: 6.99,
        pricePKR: 2000,
        description: "Double beef patties with extra melted cheese and secret sauce.",
        image : cheeseburger
      },
      {
        id: 6,
        name: "Mushroom Swiss Burger",
        category: "Burger",
        priceUSD: 6.79,
        pricePKR: 1950,
        description: "Juicy beef patty topped with Swiss cheese, mushrooms, and garlic mayo.",
        image : mashroomburger
      },
      {
        id: 7,
        name: "Crispy Fish Burger",
        category: "Burger",
        priceUSD: 5.29,
        pricePKR: 1500,
        description: "Golden fried fish fillet with tartar sauce and fresh lettuce.",
        image : fishburger
      },
      {
        id: 8,
        name: "Veggie Delight Burger",
        category: "Burger",
        priceUSD: 4.79,
        pricePKR: 1350,
        description: "A delicious veggie patty with fresh tomatoes, lettuce, and cheese.",
        image : veggieburger
      },
        {
          id: 9,
          name: "Classic Chicken Wings",
          category: "Chicken Wings",
          priceUSD: 5.99,
          pricePKR: 1700,
          description: "Crispy and juicy fried chicken wings with a golden crust.",
          image : chickenwings
        },
        {
          id: 10,
          name: "Spicy Buffalo Wings",
          category: "Chicken Wings",
          priceUSD: 6.49,
          pricePKR: 1850,
          description: "Tangy and spicy buffalo sauce-coated chicken wings.",
          image : beefwings
        },
        {
          id: 11,
          name: "Spicy BBQ Wings",
          category: "Chicken Wings",
          priceUSD: 6.79,
          pricePKR: 1950,
          description: "Sweet and smoky honey BBQ glazed wings.",
          image : bbqwings
        },
        {
          id: 12,
          name: "Garlic Parmesan Wings",
          category: "Chicken Wings",
          priceUSD: 7.29,
          pricePKR: 2100,
          description: "Crispy wings tossed in garlic butter and parmesan cheese.",
          image : garlicwings
        },
        {
          id: 13,
          name: "Teriyaki Chicken Wings",
          category: "Chicken Wings",
          priceUSD: 6.99,
          pricePKR: 2000,
          description: "Glazed with sweet and savory teriyaki sauce.",
          image : teriyakiwings
        },
        {
          id: 14,
          name: "Lemon Pepper Wings",
          category: "Chicken Wings",
          priceUSD: 7.49,
          pricePKR: 2150,
          description: "Crispy wings coated in zesty lemon pepper seasoning.",
          image : pepperwings
        },
        {
          id: 15,
          name: "Peri Peri Wings",
          category: "Chicken Wings",
          priceUSD: 7.79,
          pricePKR: 2250,
          description: "Spicy and tangy peri peri flavored chicken wings.",
          image : periwings
        },
        {
          id: 16,
          name: "Smoky Chipotle Wings",
          category: "Chicken Wings",
          priceUSD: 8.29,
          pricePKR: 2400,
          description: "Smoky and mildly spicy chipotle-flavored wings.",
          image : smokywings
        }
      ,
      {
        id: 17,
        name: "Classic Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 4.99,
        pricePKR: 1400,
        description: "Traditional chicken shawarma wrapped in soft pita with garlic sauce.",
        image : chickenshawarma
      },
      {
        id: 18,
        name: "Spicy Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 5.49,
        pricePKR: 1550,
        description: "Juicy chicken shawarma with an extra kick of spicy sauce.",
        image : spicyshawarma
      },
      {
        id: 19,
        name: "Cheese Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 5.99,
        pricePKR: 1700,
        description: "Grilled chicken shawarma loaded with melted cheese and special sauce.",
        image : cheeseshawarma
      },
      {
        id: 20,
        name: "BBQ Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 6.29,
        pricePKR: 1800,
        description: "Smoky BBQ-flavored chicken wrapped in fresh pita with veggies.",
        image : bbqshawarma
      },
      {
        id: 21,
        name: "Garlic Mayo Shawarma",
        category: "Shawarma",
        priceUSD: 5.79,
        pricePKR: 1650,
        description: "Delicious chicken shawarma with extra garlic mayo goodness.",
        image : garlicshawarma
      },
      {
        id: 22,
        name: "Peri Peri Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 6.49,
        pricePKR: 1900,
        description: "A fiery blend of peri peri spices with juicy chicken shawarma.",
        image : perishawarma
      },
      {
        id: 23,
        name: "Tandoori Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 6.79,
        pricePKR: 2000,
        description: "Rich tandoori-flavored chicken wrapped in fresh pita with raita.",
        image : tandoorishawarma
      },
      {
        id: 24,
        name: "Mediterranean Chicken Shawarma",
        category: "Shawarma",
        priceUSD: 6.99,
        pricePKR: 2100,
        description: "A fresh Mediterranean-style chicken shawarma with tahini sauce.",
        image : Mediterraneanshawarma
      },
      {
        id: 25,
        name: "Classic French Fries",
        category: "French Fries",
        priceUSD: 2.99,
        pricePKR: 850,
        description: "Golden, crispy, and lightly salted classic french fries.",
        image : classicfries
      },
      {
        id: 26,
        name: "Cheese Fries",
        category: "French Fries",
        priceUSD: 3.99,
        pricePKR: 1150,
        description: "Crispy fries topped with melted cheddar cheese.",
        image : cheesefries
      },
      {
        id: 27,
        name: "Spicy Masala Fries",
        category: "French Fries",
        priceUSD: 3.79,
        pricePKR: 1100,
        description: "Fries coated with a special blend of spicy masala seasoning.",
        image : spicyfries
      },
      {
        id: 28,
        name: "Curly Fries",
        category: "French Fries",
        priceUSD: 4.49,
        pricePKR: 1300,
        description: "Crispy, seasoned curly fries with a crunchy texture.",
        image : curlyfries
      },
      {
        id: 29,
        name: "Garlic Parmesan Fries",
        category: "French Fries",
        priceUSD: 4.99,
        pricePKR: 1450,
        description: "Fries tossed in garlic butter and topped with parmesan cheese.",
        image : garlicfries
      },
      {
        id: 30,
        name: "Loaded Fries",
        category: "French Fries",
        priceUSD: 5.49,
        pricePKR: 1600,
        description: "Fries loaded with cheese, jalapeños, and crispy bacon bits.",
        image : loadedfries
      },
      {
        id: 31,
        name: "Peri Peri Fries",
        category: "French Fries",
        priceUSD: 4.29,
        pricePKR: 1250,
        description: "Crispy fries coated with spicy peri peri seasoning.",
        image : perifries
      },
      {
        id: 32,
        name: "Truffle Fries",
        category: "French Fries",
        priceUSD: 6.99,
        pricePKR: 1900,
        description: "Fries drizzled with truffle oil and topped with parmesan.",
        image : trufflefries
      },
        {
          id: 33,
          name: "Classic Chicken Sandwich",
          category: "Sandwich",
          priceUSD: 5.99,
          pricePKR: 1700,
          description: "Grilled chicken breast with lettuce, tomato, and mayo in a toasted bun.",
          image : chickensandwich
        },
        {
          id: 34,
          name: "Spicy Crispy Chicken Sandwich",
          category: "Sandwich",
          priceUSD: 6.49,
          pricePKR: 1850,
          description: "Crispy fried chicken fillet with spicy sauce and pickles.",
          image : spicysandwich
        },
        {
          id: 35,
          name: "BBQ Chicken Sandwich",
          category: "Sandwich",
          priceUSD: 6.79,
          pricePKR: 1950,
          description: "Grilled chicken with smoky BBQ sauce and coleslaw in a soft bun.",
          image : bbqsandwich
        },
        {
          id: 36,
          name: "Club Sandwich",
          category: "Sandwich",
          priceUSD: 7.29,
          pricePKR: 2100,
          description: "Triple-layered sandwich with chicken, turkey, cheese, lettuce, and mayo.",
          image : clubsandwich
        },
        {
          id: 37,
          name: "Cheese Melt Sandwich",
          category: "Sandwich",
          priceUSD: 6.99,
          pricePKR: 2000,
          description: "Melted cheddar and mozzarella cheese with grilled chicken in toasted bread.",
          image : cheesesandwich
        },
        {
          id: 38,
          name: "Peri Peri Chicken Sandwich",
          category: "Sandwich",
          priceUSD: 7.49,
          pricePKR: 2150,
          description: "Spicy peri peri marinated chicken with lettuce and garlic mayo.",
          image : perisandwich
        },
        {
          id: 39,
          name: "Veggie Delight Sandwich",
          category: "Sandwich",
          priceUSD: 5.79,
          pricePKR: 1650,
          description: "A healthy mix of fresh veggies, cheese, and special sauce.",
          image : veggiesandwich
        },
        {
          id: 40,
          name: "Tandoori Chicken Sandwich",
          category: "Sandwich",
          priceUSD: 7.99,
          pricePKR: 2250,
          description: "Tandoori spiced grilled chicken with raita and fresh vegetables.",
          image : tandoorisandwich
        },
        {
            id: 41,
            name: "Classic Margherita Pizza",
            category: "Pizza",
            priceUSD: 8.99,
            pricePKR: 2550,
            description: "Traditional margherita pizza with fresh basil, mozzarella, and tomato sauce.",
            image : margheritapizza
          },
          {
            id: 42,
            name: "Pepperoni Feast Pizza",
            category: "Pizza",
            priceUSD: 9.49,
            pricePKR: 2700,
            description: "Loaded with spicy pepperoni and extra cheese on a crispy crust.",
            image : feastpizza
          },
          {
            id: 43,
            name: "BBQ Chicken Pizza",
            category: "Pizza",
            priceUSD: 9.99,
            pricePKR: 2850,
            description: "Grilled chicken, smoky BBQ sauce, onions, and mozzarella cheese.",
            image : bbqpizza
          },
          {
            id: 44,
            name: "Veggie Supreme Pizza",
            category: "Pizza",
            priceUSD: 8.79,
            pricePKR: 2500,
            description: "A mix of fresh vegetables, olives, and mushrooms on a cheesy base.",
            image : veggiepizza
          },
          {
            id: 45,
            name: "Peri Peri Chicken Pizza",
            category: "Pizza",
            priceUSD: 10.49,
            pricePKR: 3000,
            description: "Spicy peri peri chicken with jalapeños, bell peppers, and cheese.",
            image : peripizza
          },
          {
            id: 46,
            name: "Meat Lovers Pizza",
            category: "Pizza",
            priceUSD: 11.29,
            pricePKR: 3200,
            description: "A combination of chicken, beef, and pepperoni topped with extra cheese.",
            image : meatloverpizza
          },
          {
            id: 47,
            name: "Cheese Burst Pizza",
            category: "Pizza",
            priceUSD: 10.99,
            pricePKR: 3100,
            description: "Stuffed crust pizza overloaded with a blend of melted cheeses.",
            image : cheesepizza
          },
          {
            id: 48,
            name: "Tandoori Chicken Pizza",
            category: "Pizza",
            priceUSD: 10.79,
            pricePKR: 3050,
            description: "Tandoori spiced chicken with onions, tomatoes, and yogurt drizzle.",
            image : tandooripizza
          },
            {
              id: 49,
              name: "Classic Vanilla Ice Cream",
              category: "Ice Cream",
              priceUSD: 3.99,
              pricePKR: 1150,
              description: "Rich and creamy vanilla-flavored ice cream made with fresh milk.",
              image : vanillaice
            },
            {
              id: 50,
              name: "Chocolate Fudge Ice Cream",
              category: "Ice Cream",
              priceUSD: 4.49,
              pricePKR: 1300,
              description: "Smooth chocolate ice cream with swirls of fudge.",
              image : chocolateice
            },
            {
              id: 51,
              name: "Strawberry Delight Ice Cream",
              category: "Ice Cream",
              priceUSD: 4.29,
              pricePKR: 1250,
              description: "Fresh strawberry ice cream with real fruit chunks.",
              image : strawberryice
            },
            {
              id: 52,
              name: "Cookies & Cream Ice Cream",
              category: "Ice Cream",
              priceUSD: 4.79,
              pricePKR: 1400,
              description: "Vanilla ice cream loaded with crunchy chocolate cookie pieces.",
              image : cookieice
            },
            {
              id: 53,
              name: "Mint Chocolate Chip Ice Cream",
              category: "Ice Cream",
              priceUSD: 4.99,
              pricePKR: 1450,
              description: "Refreshing mint ice cream with chocolate chips.",
              image : mintice
            },
            {
              id: 54,
              name: "Caramel Swirl Ice Cream",
              category: "Ice Cream",
              priceUSD: 5.29,
              pricePKR: 1550,
              description: "Creamy caramel ice cream with a swirl of rich caramel sauce.",
              image : caramelice
            },
            {
              id: 55,
              name: "Pistachio Almond Ice Cream",
              category: "Ice Cream",
              priceUSD: 5.49,
              pricePKR: 1600,
              description: "Nutty pistachio ice cream with crunchy almond pieces.",
              image : almondice
            },
            {
              id: 56,
              name: "Tropical Mango Ice Cream",
              category: "Ice Cream",
              priceUSD: 4.89,
              pricePKR: 1450,
              description: "Sweet and tangy mango ice cream with real mango puree.",
              image : mangoice
            },
            {
                id: 57,
                name: "Coca-Cola",
                category: "Cold Drinks",
                priceUSD: 1.99,
                pricePKR: 550,
                description: "",
                image : coke
              },
              {
                id: 58,
                name: "Pepsi",
                category: "Cold Drinks",
                priceUSD: 1.99,
                pricePKR: 550,
                description: "Popular cola-flavored soft drink with a bold, refreshing taste.",
                image : pepsi
              },
              {
                id: 59,
                name: "Sprite",
                category: "Cold Drinks",
                priceUSD: 1.89,
                pricePKR: 520,
                description: "Lemon-lime flavored carbonated drink with a crisp taste.",
                image : sprite
              },
              {
                id: 60,
                name: "Fanta Orange",
                category: "Cold Drinks",
                priceUSD: 1.99,
                pricePKR: 550,
                description: "Bright and bubbly orange-flavored soda.",
                image : fanta
              },
              {
                id: 61,
                name: "7UP",
                category: "Cold Drinks",
                priceUSD: 1.89,
                pricePKR: 520,
                description: "Refreshing lemon-lime soda with a crisp and clean taste.",
                image : sevenup
              },
              {
                id: 62,
                name: "Mountain Dew",
                category: "Cold Drinks",
                priceUSD: 2.09,
                pricePKR: 580,
                description: "Citrus-flavored soda with a bold and energizing taste.",
                image : dew
              },
              {
                id: 63,
                name: "Dr Pepper",
                category: "Cold Drinks",
                priceUSD: 2.19,
                pricePKR: 600,
                description: "Unique blend of 23 flavors for a one-of-a-kind taste.",
                image : drpepper
              },
              {
                id: 64,
                name: "Mirinda",
                category: "Cold Drinks",
                priceUSD: 1.99,
                pricePKR: 550,
                description: "Fizzy orange soda bursting with sweet citrus flavor.",
                image : mirinda
              }
]
export default allFoodData