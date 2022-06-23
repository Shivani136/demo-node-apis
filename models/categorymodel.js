module.exports = mongoose => {
    const User = mongoose.model(
      "category",
      mongoose.Schema(
        {
          title: String,
          image: String
        //   description: String,
         
        },
        { timestamps: true }
      )
    );
    return User;
  };