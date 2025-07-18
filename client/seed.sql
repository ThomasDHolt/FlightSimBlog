CREATE TABLE IF NOT EXISTS categories (
  id                      INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name                    VARCHAR(255) NOT NULL,
  background_colour_hex   VARCHAR(7) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title         VARCHAR(255) NOT NULL,
  content       TEXT NOT NULL,
  poster_name   TEXT NOT NULL,
  likes         int NOT NULL,
  date          DATE NOT NULL,
  category_id   INT REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS comments (
  id              INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content         TEXT NOT NULL,
  commenter_name  VARCHAR(255) NOT NULL,
  likes           INT NOT NULL,
  date            DATE NOT NULL,
  post_id         INT REFERENCES posts(id)
);

INSERT INTO categories (name, background_colour_hex) VALUES
('Microsoft Flight Simulator 2020', '#00A1DF'),
('Microsoft Flight Simulator 2024', '#0082BD'),
('X-Plane 11', '#1BA2DC'),
('X-Plane 12', '#1679B5');

INSERT INTO posts (title, content, poster_name, likes, date, category_id) VALUES
('Breathtaking Sunset Approach into Innsbruck!', 'Just wrapped up an evening VFR flight from Munich to Innsbruck in the Cessna 172, and WOW — the views were unreal. I hit golden hour just right and the Alps were glowing. The approach into LOWI was smooth (for once 😅), with a bit of turbulence on final, but nothing too crazy. I used the G1000 and some real-time weather — light winds, broken clouds, and that signature Alpine haze.', 'SkyCaptain87', 0, '2021-05-12', 1),
('Stormy Night Landing at JFK – X-Plane 12 Feels Realer Than Ever!', 'Just completed a harrowing ILS approach into JFK in the Zibo 737 under some seriously rough weather using real-time METAR. Heavy rain, gusting crosswinds up to 30 knots, and low visibility had my palms sweating (and I’m not even in a real cockpit 😅).

The new lighting and weather engine in XP12 made the whole experience incredibly immersive. Lightning flashes lit up the clouds on descent, runway lights shimmering through the rain — it was like something out of a movie. Managed a decent landing on 22L despite a bit of float.', 'TorqueMaster99', 0, '2023-11-23', 4);

INSERT INTO comments (content, commenter_name, likes, date, post_id) VALUES
('That’s one of my favorite routes! LOWI can be a real challenge but super rewarding. Got any screenshots?', 'PlaneSpotter22', 0, '2021-05-12', 1),
('Alpine haze is underrated 🔥 Looking forward to that video clip!', 'JetJunkieX', 0, '2021-05-13', 1),
('Do you fly with live traffic too? Makes it even more immersive!', 'VFRpilot_92', 0, '2021-05-15', 1),
('I tried that same flight last week — those crosswinds are NO joke. Props to you for sticking the landing.', 'ApproachModeArmed', 0, '2023-11-25', 2),
('I feel like XP12 nailed runway lighting this time. Totally agree with the movie vibe during storms.', 'FinalCall_', 0, '2023-12-27', 2);