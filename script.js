var RecipeApp = function () {

    var recipes = [
        { 
            name: 'Best Chicken Soup!', 
            image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
            ingredients: [
                { name: 'whole chicken' },
                { name: 'medium carrots'},
                { name: 'onions' },
            ] 
        }
    ];


    //id's for recipes
    var recId = 0;

    //id's for ingredients
    var ingId = 0;

    var createRecipe = function(name, image){
        var recipe = {
            name: name,
            image: image, 
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId ++; 

        recipes.push(recipe);
    }; 
    function addIngredient(text,recipeId){

        var recipe = _findPostById(id);
        var ingredient = { text: textIngredient };
        recipe.ingredients.push(ingredient);
        
    }

    var createIngredients = function(currentRecipe, textIngredient){
        //get data from the view
        var $clickedRecipe = $(currentRecipe).closest('.recipe');
        var id = $clickedRecipe.data().id;

        addIngredient(textIngredient,id)
    };

    var _getIngredients = function(recipe){
        var liIngredients = "";
        if (recipe.ingredients.length > 0)
        {
            // 2 - Loop through the ingredients array,
            for (var i=0; i < recipe.ingredients.length; i++) {
                liIngredients+= "<li>" + recipe.ingredients[i].name + "</li>";
            }
        }
        return liIngredients;
    };

    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for(var i = 0; i < recipes.length; i ++){
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredients(recipe); //add code
            debugger;
            $recipes.append(
                '<div class="   col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' + 
                    '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                    '<img class="recipe-img" src="' + recipe.image + '"/>' +
                    '<hr>' +
                    '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                    '<div class="input-group mb-3">' +
                        '<div class="input-group-prepend">' +
                        '<span class="add-ingredients input-group-text" id="basic-addon3">Add Ingredients</span>' +
                        '<input type="text" class="ingredient-name">' +
                        '</div>' + 
                        '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +   
                    '</div>' +
                    '<ul class="ingredients">' + ingredients + '</ul>'+
                '</div>'
            );
        }
    };

    return {
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        createIngredients: createIngredients
    }
};
var $recipes = $('.recipes');

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function(){
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});


$recipes.on('click','.add-ingredients', function () {
    // Get the input comment of the current post we enter
    var text = $(this).closest(".recipe").find('.ingredient-name').val();

    app.createIngredients(this, text);
    // Update the view of the comments
    app.renderRecipes(this);
});

