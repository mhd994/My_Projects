import random
rock = "rock"
paper = "paper"
scissors = "scissors"
print("Welcome to the Rock, Paper, Scissors game:")
confirm = input("Press Enter to continue or type (Help) for the rules:").lower()
if confirm =="help":
    print(""" ******** RULES *********
          1) You choose and the computer chooses
          2) Rock smashes Scissors -> Rock Wins
          3) Scissors cut Paper -> Scisssors wins
          4) Paper covers Rock -> Paper wins""")
user_choice = input("Enter your choice (rock, paper, scissors):").lower()
if user_choice not in ["rock", "paper", "scissors"]:
    print("Invalid choice.please run the program again and choose rock, paper , or scissors.")
if user_choice =="rock":
    print(f"\nYou chose:\n{rock}")
elif user_choice=="paper":
    print(f"\n You chose:\n{paper}")
else:
    print(f"\nYou chose:\n{scissors}")
computer_choice = random.choice(["rock","paper","scissors"])
if computer_choice =="rock":
    print(f"Computer chose:\n{rock}")
elif computer_choice =="paper":
    print(f"Computer chose:\n{paper}")
else:
    print(f"Computer chose:\n{scissors}")
if user_choice == computer_choice:
    print("Its a tie")
elif (
    (user_choice=="rock" and computer_choice =="scissors")
    or
    (user_choice =="paper"and computer_choice =="rock")
    or
    (user_choice == "scissors" and computer_choice =="paper")):
    print(f"You win! {user_choice} beats {computer_choice}.")
else:
    print(f"You lose! {computer_choice} beats {user_choice}.")