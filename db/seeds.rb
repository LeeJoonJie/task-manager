# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tasks = Task.create([
                      {
                        title: 'CS2040 Assignment 1',
                        description: 'BST assignment',
                        deadline: '5-01-2021',
                        priority: 'Moderate',
                        progress: 100,
                        tags: %w[CS2040 school]
                      },
                      {
                        title: 'Buy CNY clothes',
                        description: 'Red shirt & underwear',
                        deadline: '12-02-2021',
                        priority: 'Low',
                        progress: 100,
                        tags: ['CNY']
                      },
                      {
                        title: 'CS2030 Project 1',
                        description: 'Discrete simulator project part 1',
                        deadline: '21-01-2021',
                        priority: 'High',
                        progress: 50,
                        tags: %w[cs2030 school]
                      },
                      {
                        title: 'Plan Bob\'s birthday surprise',
                        description: '',
                        deadline: '16-05-2021',
                        priority: 'Moderate',
                        progress: 10,
                        tags: ['birthday']
                      },
                      {
                        title: 'CS2030 Project 2',
                        description: 'Discrete simulator project part 2',
                        deadline: '02-02-2021',
                        priority: 'Moderate',
                        progress: 0,
                        tags: %w[CS2030 school]
                      },
                      {
                        title: 'Band CCA concert',
                        description: 'Practise and plan for concert',
                        deadline: '25-07-2021',
                        priority: 'Moderate',
                        progress: 10,
                        tags: %w[CCA school band]
                      },
                      {
                        title: 'Buy CNY decorations',
                        description: 'Lanterns, ang baos, flowers etc.',
                        deadline: '12-02-2021',
                        priority: 'Low',
                        progress: 10,
                        tags: ['CNY']
                      },
                      {
                        title: 'Spring cleaning',
                        description: 'Clean bedroom, kitchen, living room',
                        deadline: '10-02-2021',
                        priority: 'Moderate',
                        progress: 25,
                        tags: ['CNY']
                      },
                      {
                        title: 'CS2040 Assignment 2',
                        description: 'HashMap assignment',
                        deadline: '10-01-2021',
                        priority: 'High',
                        progress: 50,
                        tags: %w[CS2040 school]
                      },
                      {
                        title: 'GES report',
                        description: 'Report on Singapore history',
                        deadline: '31-01-2021',
                        priority: 'High',
                        progress: 0,
                        tags: %w[GES1021 school]
                      },
                      {
                        title: 'Buy Dave\'s birthday present',
                        description: 'Maybe whisky or wine',
                        deadline: '30-03-2021',
                        priority: 'Low',
                        progress: 0,
                        tags: ['birthday']
                      },
                      {
                        title: 'Prepare GER presentation',
                        description: 'Team presentation on analysing research paper',
                        deadline: '08-04-2021',
                        priority: 'Moderate',
                        progress: 0,
                        tags: %w[GER1000 school]
                      },
                      {
                        title: 'Write CCA budget report',
                        description: 'Annual budget report',
                        deadline: '28-06-2021',
                        priority: 'Moderate',
                        progress: 20,
                        tags: %w[CCA school band]
                      },
                      {
                        title: 'Bake CNY cookies',
                        description: 'Pineapple tarts, love letters x10 boxes',
                        deadline: '12-02-2021',
                        priority: 'Moderate',
                        progress: 0,
                        tags: ['CNY']
                      }
                    ])
