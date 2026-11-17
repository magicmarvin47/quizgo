CREATE TABLE IF NOT EXISTS results (id TEXT PRIMARY KEY,user_id TEXT NOT NULL,date TEXT NOT NULL,subject TEXT NOT NULL,total INTEGER NOT NULL,correct INTEGER NOT NULL,wrong INTEGER NOT NULL,missed_json TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS results_user_date ON results(user_id,date DESC);
CREATE TABLE IF NOT EXISTS questions (id TEXT NOT NULL,user_id TEXT NOT NULL,subject TEXT NOT NULL,prompt TEXT NOT NULL,options_json TEXT NOT NULL,correct TEXT NOT NULL,PRIMARY KEY(id,user_id));
CREATE INDEX IF NOT EXISTS questions_user ON questions(user_id);