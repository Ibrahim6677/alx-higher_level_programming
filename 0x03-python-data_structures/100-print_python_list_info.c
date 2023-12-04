#include <stdlib.h>
#include <stdio.h>
#include <Python.h>
/**
 * print_python_list_info -  function that prints some basic
 *							info about Python lists
 * @p: python list
 */
void print_python_list_info(PyObject *p)
{
	int elem;
	PyObject *obj;

	size = Py_SIZE(p);
	alloc = ((PyListObject *)p)->allocated;

	printf("[*] Size of the Python List = %d\n", size);
	printf("[*] Allocated = %d\n", alloc);
	for (elem = 0; elem < size; elem++)
	{
		printf("Element %d: ", elem);

		obj = PyList_GetItem(p, elem);
		printf("%s\n", Py_TYPE(obj)->tp_name);
	}
