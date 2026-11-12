export type Food = { id: string; name: string; serving: string; calories: number; protein: number; carbs: number; fats: number; category: string; image?: string; fruit?: boolean };
export type Entry = Food & { entryId: string; amount: number; date: string };
export type Recipe = Food & { time: number; tag: string; ingredients: string[]; steps: string[] };
export const categories = ['Breakfast', 'Morning snack', 'Lunch', 'Afternoon snack', 'Dinner'];
export const foods: Food[] = [
{ id:'oats', name:'Berry & banana overnight oats', serving:'1 bowl · 250 g', calories:350, protein:12, carbs:56, fats:9, category:'Breakfast', image:'/images/oats.jpg',fruit:true },
{ id:'egg',name:'Boiled eggs',serving:'2 eggs',calories:156,protein:13,carbs:1,fats:11,category:'Breakfast' },
{ id:'banana',name:'Banana',serving:'1 medium',calories:105,protein:1,carbs:27,fats:0,category:'Morning snack',fruit:true },
{ id:'githeri',name:'Githeri with avocado',serving:'1 bowl · 300 g',calories:420,protein:17,carbs:63,fats:12,category:'Lunch',image:'/images/bowl.jpg',fruit:true },
{ id:'ugali',name:'Ugali',serving:'1 portion · 200 g',calories:220,protein:5,carbs:47,fats:1,category:'Dinner' },
{ id:'sukuma',name:'Sukuma wiki',serving:'1 cup · 150 g',calories:85,protein:4,carbs:9,fats:4,category:'Dinner',fruit:true },
{ id:'beans',name:'Stewed beans',serving:'1 cup · 180 g',calories:245,protein:15,carbs:40,fats:3,category:'Lunch' },
{ id:'lentils',name:'Coconut lentil stew',serving:'1 bowl · 250 g',calories:310,protein:18,carbs:42,fats:8,category:'Dinner' },
{ id:'rice',name:'Steamed brown rice',serving:'1 cup · 195 g',calories:215,protein:5,carbs:45,fats:2,category:'Lunch' },
{ id:'potato',name:'Boiled sweet potatoes',serving:'1 medium · 150 g',calories:130,protein:2,carbs:30,fats:0,category:'Breakfast' },
{ id:'fish',name:'Grilled fish & garden vegetables',serving:'1 plate · 350 g',calories:395,protein:34,carbs:24,fats:17,category:'Dinner',image:'/images/fish.jpg',fruit:true },
{ id:'chicken',name:'Grilled chicken',serving:'1 portion · 150 g',calories:248,protein:46,carbs:0,fats:5,category:'Lunch' },
{ id:'yogurt',name:'Plain yogurt & almonds',serving:'1 cup · 180 g',calories:185,protein:10,carbs:14,fats:10,category:'Afternoon snack' },
{ id:'orange',name:'Fresh orange',serving:'1 medium',calories:62,protein:1,carbs:15,fats:0,category:'Morning snack',fruit:true },
{ id:'greens',name:'Traditional leafy vegetables',serving:'1 cup · 150 g',calories:75,protein:4,carbs:8,fats:3,category:'Dinner',fruit:true }
];
export const recipes: Recipe[] = [
{ ...foods[3],name:'The everyday nourishing bowl',time:25,tag:'Plant-based',ingredients:['1 cup cooked beans','½ cup cooked maize','½ avocado','1 tomato','1 handful leafy greens','1 tsp olive oil'],steps:['Rinse and chop the tomato and leafy greens.','Warm the cooked beans and maize with olive oil for 5 minutes.','Add the greens and cook until tender.','Serve in a bowl with sliced avocado and fresh tomato.'] },
{ ...foods[10],time:30,tag:'High protein',ingredients:['150 g fish fillet','1 cup seasonal vegetables','½ cup cooked brown rice','1 tsp olive oil','Lemon and herbs'],steps:['Season the fish with lemon, herbs and a pinch of salt.','Grill for 6–8 minutes per side, until fully cooked.','Steam the vegetables until tender.','Serve the fish with vegetables and brown rice.'] },
{ ...foods[0],name:'Sunshine overnight oats',time:10,tag:'Vegetarian',ingredients:['½ cup rolled oats','½ cup milk or plant milk','½ banana','¼ cup berries','1 tsp chia seeds'],steps:['Mix the oats, milk and chia seeds in a jar.','Cover and refrigerate overnight.','Top with sliced banana and berries before serving.'] },
{ ...foods[7],image:'/images/bowl.jpg',time:35,tag:'Plant-based',ingredients:['1 cup cooked lentils','½ cup coconut milk','1 tomato','1 onion','1 cup leafy greens'],steps:['Sauté chopped onion and tomato until soft.','Add lentils and coconut milk. Simmer for 15 minutes.','Stir in the greens and cook for 5 minutes. Serve warm.'] }
];
export const todayKey = () => new Date().toLocaleDateString('en-CA');
export const dateKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const initialEntries = (): Entry[] => [foods[0],foods[1],foods[2],foods[3],foods[12]].map((f,i)=>({...f,entryId:`sample-${i}`,amount:1,date:dateKey(new Date())}));
export const navItems = ['Overview','Food Diary','Discover Meals','Meal Planner','Healthy Habits','My Progress'];
