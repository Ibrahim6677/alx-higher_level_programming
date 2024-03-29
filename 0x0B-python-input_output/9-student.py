#!/usr/bin/python3
"""contains the class "Student"""


class Student:
    """Representation of a student"""
    def __init__(self, first_name, last_name, age):
        """Initialies the student"""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self):
        """returns a dictionary representation of Student ubstance"""
        return self.__dict__
