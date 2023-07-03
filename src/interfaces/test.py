f = open('Wines10K.csv')
wines = pd.read_csv(f)
print(len(wines), 'wines')


wines[wines.description.str.contains('chocolate')][['country', 'variety', 'description']]
wines[wines.description.str.contains('chocolate') & wines.description.str.contains('fruit')]\
[['country', 'variety','description']]

for i in range(len(wines)):
    text = wines.loc[i].description
    s = re.search('chocolate(.*)fruit', text)
    if s:
        print(wines.loc[i].country, wines.loc[i].variety, '-', text, '\n')

# Find wines to be drunk through 2020 or later
for i in range(len(wines)):
    text = wines.loc[i].description
    s = re.search('Drink(.*) through 20(2|3).\.', text)
    if s:
        print(wines.loc[i].variety, '-', text[s.start():s.end()])


# Remove puncutation
punct = list(string.punctuation)
tokens_nopunct = []
for word in tokens:
    if word not in punct:
        tokens_nopunct.append(word)
print(tokens_nopunct)

# more compact code for same thing
punct = list(string.punctuation)
tokens_nopunct = [word for word in tokens if word not in punct]
print(tokens_nopunct)

# Tag with parts of speech

tagged = nltk.pos_tag(tokens_nopunct)
print(tagged)

# same functionality without n-grams


for i in range(len(allwords)-2):
    if allwords[i] == 'citrus':
        print(allwords[i], allwords[i+1], allwords[i+2])


# Find all wines where the description includes a sequence of words that starts with the wine's winery and ends with the wine's variety. Print the winery, variety, and the winery-to-variety word sequence from the description.

# Hint: Refer to chocolate-precedes-fruit and 2020 examples earlier
# Hint: Use string concatenation operator '+' to create your re.search string   

for i in range(len(wines)):
    text = wines.loc[i].description
    s = re.search(wines.loc[i].winery + '(.*)' + wines.loc[i].variety, text)
    if s:
        print(wines.loc[i].winery, wines.loc[i].variety, '-', text[s.start():s.end()])



# SEARCH SUGGESTIONS: Loop where user enters two words, system returns suggested additional words. Specifically, return the five triples occuring most often that contain the two entered words (in any position). Use non-stopwords only. Text preparation may take several minutes, so it's in a separate cell from the user loop for convenience in debugging and experimenting.
# STEP 1: Turn corpus into one list of words without punctuation or stopwords
# Hint: Combine code from earlier examples for all-words, no-punctuation, no-stopwords
# Preparation will take a while, so first print a user-pacification message

print('Preparing the text corpus...')
punct = list(string.punctuation)

stop = stopwords.words('english')

allwords = []
for i in range(len(wines)):
    text = wines.loc[i].description
    tokens = nltk.wordpunct_tokenize(text)
    tokens = [word.lower() for word in tokens if (word not in punct) and word not in stop]
    allwords = allwords + tokens
    
print('Done')


# STEP 2: Create a list of 3-grams from the text corpus
# HINT: The ngrams() function returns a one-time iterator; applying function list()
#   to the result creates a list that can be iterated through many times



print('Done')



# STEP 3: Loop asking for words and returning suggestions
# Code provided for loop of user entering words, putting them into a list
while True:
    text = input("Enter two words (or 'quit' to quit): ")
    if text == 'quit': break
    words = text.split()
    if len(words) != 2:
        print('Enter exactly two words')
    else:
        # Replace print statement below with code to find the five most common
        # triples containing both words
        # Hint: Make a list of all the 3-grams containing the two entered words
        # Use the 'Counter' feature as above to find the 3-grams occurring most 
        # often in your list - no need for beautiful output
        # If there are no 3-grams containing the two entered words, print 'No suggestions'
        print(words[0], words[1]) # REPLACE THIS STATEMENT WITH YOUR CODE
print('goodbye')