import Movie from "../domain/Movie";

test('new Movie class object', () => {
    const movie = new Movie(
      1,
      'Мстители',
      2012,
      'США',
      'Avengers Assemble!',
      'фантастика, боевик, фэнтези, приключения',
      137,
      199
    );
  
    expect(movie).toEqual({
      id: 1,
      name: 'Мстители',
      year: 2012,
      country: 'США',
      tagline: 'Avengers Assemble!',
      genre: 'фантастика, боевик, фэнтези, приключения',
      duration: 137,
      price: 199,
    });
  });