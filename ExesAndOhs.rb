# Check to see if a string has the same amount of 'x's and 'o's.
# The method must return a boolean and be case insensitive.
# The string can contains any char.


#My Answer
def XO(str)
  str.downcase!
  str.count('o') == str.count('x')
end
