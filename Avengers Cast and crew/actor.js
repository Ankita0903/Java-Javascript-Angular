/**
 * This prototypal object definition defines an actor's role in "The Flash".
 *  
 * @class Actor
 * @param name {String} The name of the actor.
 * @param image {String} The image path of the actor's bio profile picture.
 * @param bio {String} The biography of the actor.
 */
function Actor(name, image, bio) {
    // declare these as private variables
    var name = name;
    var image = image;
    var bio = bio;

    /**
     * This will get the name of the actor.
     *
     * @method getName
     * @return {String} The name of the actor.
     */
    this.getName = function() { return name; };
    /**
     * This will get the image path for the actor.
     *
     * @method getImage
     * @return {String} The image path of the actor.
     */
    this.getImage = function() { return image; };
    /**
     * This will get the biography of the actor.
     *
     * @method getImage
     * @return {String} The biography of the actor.
     */
    this.getBio = function() { return bio; };
}
