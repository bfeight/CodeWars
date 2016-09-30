



def createPhoneNumber(numbers)
  p "(#{numbers[0]}#{numbers[1]}#{numbers[2]}) #{numbers[3]}#{numbers[4]}#{numbers[5]}-#{numbers[6]}#{numbers[7]}#{numbers[8]}#{numbers[9]}"
end

puts createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
