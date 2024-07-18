from random import choice

def __salt(salt_chars, salt_data):
    try:
        salt_length = int(salt_data.split(".")[-1])
        return "".join([choice(salt_chars) for _ in range(salt_length)])
    except ValueError:
        raise ValueError("Invalid salt_data format. The salt_data should end with a numeric value representing the length.")

# Example usage
salt_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
salt_data = "7H15 15 345Y r16H7.20"

salt = __salt(salt_chars, salt_data)
print(f"Generated salt: {salt}")
