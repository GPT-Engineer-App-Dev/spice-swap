import React, { useState } from "react";
import { Box, Container, Heading, VStack, Input, Textarea, Button, Text, SimpleGrid, Image, useToast } from "@chakra-ui/react";
import { FaUtensils, FaClock, FaUserFriends } from "react-icons/fa";

const Index = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: "", instructions: "", cookTime: "", servings: "" });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecipe.title && newRecipe.ingredients && newRecipe.instructions) {
      setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
      setNewRecipe({ title: "", ingredients: "", instructions: "", cookTime: "", servings: "" });
      toast({
        title: "Recipe added.",
        description: "Your new recipe has been successfully added.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          Recipe Sharing Hub
        </Heading>

        <Box as="form" onSubmit={handleSubmit} bg="gray.50" p={6} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Recipe Title"
              name="title"
              value={newRecipe.title}
              onChange={handleInputChange}
              required
            />
            <Textarea
              placeholder="Ingredients (one per line)"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
              required
            />
            <Textarea
              placeholder="Instructions"
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
              required
            />
            <Input
              placeholder="Cook Time (e.g., 30 minutes)"
              name="cookTime"
              value={newRecipe.cookTime}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Servings"
              name="servings"
              value={newRecipe.servings}
              onChange={handleInputChange}
            />
            <Button type="submit" colorScheme="teal" leftIcon={<FaUtensils />}>
              Add Recipe
            </Button>
          </VStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} bg="white" p={6} borderRadius="md" boxShadow="lg">
              <VStack align="stretch" spacing={3}>
                <Heading as="h3" size="lg" color="teal.600">
                  {recipe.title}
                </Heading>
                <Text fontWeight="bold">Ingredients:</Text>
                <Text whiteSpace="pre-line">{recipe.ingredients}</Text>
                <Text fontWeight="bold">Instructions:</Text>
                <Text>{recipe.instructions}</Text>
                {recipe.cookTime && (
                  <Text>
                    <FaClock /> Cook Time: {recipe.cookTime}
                  </Text>
                )}
                {recipe.servings && (
                  <Text>
                    <FaUserFriends /> Servings: {recipe.servings}
                  </Text>
                )}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;