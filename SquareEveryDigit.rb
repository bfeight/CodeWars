

def square_digits(num)
  number_array = num.to_s.split("")
  num_to_int = number_array.map(&:to_i)
  num_squared = num_to_int.map{|n| n**2}
  return num_squared.join("").to_i 
end

print square_digits(3212)






# def square_digits num
#   new_num = num.to_s.split("")
#   answer = ""
#   for i in new_num
#     x = i.to_i
#     squared = x * x
#     answer << squared
#
#   end
#   p answer
# end
