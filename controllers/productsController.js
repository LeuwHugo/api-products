const supabase = require('../services/supabaseClient');

const getAllProducts = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};
const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, stock } = req.body;
    const { data, error } = await supabase
      .from('products')
      .insert([{ name, description, price, stock }]);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const { data, error } = await supabase
      .from('products')
      .update({ name, description, price, stock })
      .eq('id', id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
