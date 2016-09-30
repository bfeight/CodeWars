# Description:
#
# x Simple, given a string of words, return the length of the shortest word(s).
#
# String will never be empty and you do not need to account for different data types.





#My answer
def find_short(s)
    answer_array = []
    split_array = s.split(" ")
     for i in split_array
       l = i.length
       answer_array << l
       end
  p answer_array.sort.first # l: length of the shortest word
end

#Shorter answer

def find_short(s)
  s.split.map(&:size).min
end
